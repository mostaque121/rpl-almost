import { Course, Section } from '@/app/Models/models';
import dbConnect from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';
import { updateIndicesEditCourse } from '../../lib/UpdateIndicesEditCourse';
import { updateIndicesUploadCourse } from '../../lib/UpdateIndicesUploadCourse';
import { updateSection } from '../../lib/updateSection';

export async function POST(req) {
    try {
        const body = await req.json();

        const { index, section, title, imageSquareLink, imageSquarePublicId, imageCoverLink, imageCoverPublicId, description, jobOpportunity, entryRequirement, packagingRule, coreUnits, electiveUnits } = body;
        const newIndex = Number(index);

        if (!section || !newIndex || !title || !imageSquareLink || !imageSquarePublicId || !imageCoverLink || !imageCoverPublicId || !description || !jobOpportunity || !entryRequirement || !packagingRule || !coreUnits || !electiveUnits) {
            return new Response(
                JSON.stringify({ message: 'All fields are required. Please fill in all fields.' }),
                { status: 400 }
            );
        }

        await dbConnect();

        // Check if the index already exists
        const existingCourse = await Course.findOne({ section: section, index: newIndex });
        if (existingCourse) {
            // If the index exists, update indices of other courses
            await updateIndicesUploadCourse(newIndex, section);
        }

        const newCourse = new Course({
            section,
            title,
            imageSquareLink,
            imageSquarePublicId,
            imageCoverLink,
            imageCoverPublicId,
            description,
            jobOpportunity,
            entryRequirement,
            packagingRule,
            coreUnits,
            electiveUnits,
            index: newIndex
        });

        const savedCourse = await newCourse.save();
        const populatedSavedCourse = await savedCourse.populate({
            path: 'section',
            select: 'link'
        });
        const sectionLink = populatedSavedCourse.section.link;

        await Section.findByIdAndUpdate(
            section,
            { $push: { courses: savedCourse._id } },
            { new: true }
        );

        return NextResponse.json({ success: true, sectionLink: sectionLink, data: savedCourse });
    } catch (error) {
        console.error('Error saving Course:', error);
        return new Response(JSON.stringify({ message: 'Error uploading data', error: error.message }), { status: 500 });
    }
}

export async function PUT(req) {
    try {
        // Parse the JSON body from the request
        const body = await req.json();
        const { id, index, section, title, imageSquareLink, imageSquarePublicId, imageCoverLink, imageCoverPublicId, description, jobOpportunity, entryRequirement, packagingRule, coreUnits, electiveUnits } = body;
        const newIndex = Number(index);

        if (!id || !section || !newIndex || !title || !imageSquareLink || !imageSquarePublicId || !imageCoverLink || !imageCoverPublicId || !description || !jobOpportunity || !entryRequirement || !packagingRule || !coreUnits || !electiveUnits) {
            return new Response(
                JSON.stringify({ message: 'All fields are required. Please fill in all fields.' }),
                { status: 400 }
            );
        }

        // Connect to the database
        await dbConnect();

        // Find the existing certificate by ID
        const existingCourse = await Course.findById(id).populate({
            path: 'section',
            select: 'link'
        });;

        if (!existingCourse) {
            return new Response(
                JSON.stringify({ message: 'Course not found.' }),
                { status: 404 }
            );
        }
        const prevCourseLink = existingCourse.link;
        const prevSectionLink = existingCourse.section.link;

        if (existingCourse.section !== section) {
            await updateSection(existingCourse._id, existingCourse.section, section);
        }

        // If index has changed, update the indices of other services
        await updateIndicesEditCourse(section, existingCourse.section, newIndex, existingCourse.index);

        // Update the service with new data
        existingCourse.title = title;
        existingCourse.section = section;
        existingCourse.description = description;
        existingCourse.imageSquareLink = imageSquareLink;
        existingCourse.imageSquarePublicId = imageSquarePublicId;
        existingCourse.imageCoverLink = imageCoverLink;
        existingCourse.imageCoverPublicId = imageCoverPublicId;
        existingCourse.jobOpportunity = jobOpportunity;
        existingCourse.entryRequirement = entryRequirement;
        existingCourse.packagingRule = packagingRule;
        existingCourse.coreUnits = coreUnits;
        existingCourse.electiveUnits = electiveUnits;
        existingCourse.index = newIndex;

        // Save the updated course to the database
        const updatedCourse = await existingCourse.save();
        const populatedUpdatedCourse = await updatedCourse.populate({
            path: 'section',
            select: 'link'
        });
        const newSectionLink = populatedUpdatedCourse.section.link;

        // Send back a success response with the updated course data
        return NextResponse.json({ success: true, prevCourseLink, prevSectionLink, newSectionLink, data: updatedCourse });
    } catch (error) {
        console.error('Error updating course:', error);
        // Send an error response
        return new Response(JSON.stringify({ message: 'Error updating data', error: error.message }), { status: 500 });
    }
}


export async function DELETE(request) {
    try {
        const { id } = await request.json();

        await dbConnect();

        const existingCourse = await Course.findById(id).populate({
            path: 'section',
            select: 'link'
        });;


        if (!existingCourse) {
            return new Response(JSON.stringify({ message: 'Course not found' }), { status: 404 });
        }

        await Course.findByIdAndDelete(id);

        // Update indices of remaining courses in the same section
        await Course.updateMany(
            { section: existingCourse.section, index: { $gt: existingCourse.index } },
            { $inc: { index: -1 } }
        );

        // Remove the course from the section's courses array
        await Section.findByIdAndUpdate(
            existingCourse.section,
            { $pull: { courses: id } },
            { new: true }
        );

        return new Response(JSON.stringify({ message: 'Course deleted successfully', courseLink: existingCourse.link, sectionLink: existingCourse.section.link }), { status: 200 });
    } catch (error) {
        console.error('Error deleting course:', error); // Updated log message
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}
