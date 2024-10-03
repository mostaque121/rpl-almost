import { updateIndicesEdit } from "@/app/api/lib/updateIndicesEdit";
import { updateIndicesUpload } from "@/app/api/lib/updateIndicesUpload";
import { revalidateAfterDeleteSection, revalidateAfterEditSection, revalidateAfterUploadSection } from "@/app/lib/action";
import dbConnect from "@/app/lib/mongodb";
import { Section } from "@/app/Models/models";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { title, imageSquareLink, index, imageSquarePublicId, imageCoverLink, imageCoverPublicId } = body;
        const newIndex = Number(index);

        if (!title || !newIndex || !imageSquareLink || !imageSquarePublicId || !imageCoverLink || !imageCoverPublicId) {
            return new Response(
                JSON.stringify({ message: 'All fields are required. Please fill in all fields.' }),
                { status: 400 }
            );
        }

        await dbConnect();

        // Check if the index already exists
        const existingSection = await Section.findOne({ index: newIndex });
        if (existingSection) {
            await updateIndicesUpload(newIndex);
        }

        // Create a new service with the given index
        const newSection = new Section({
            title,
            imageSquareLink,
            imageSquarePublicId,
            imageCoverLink,
            imageCoverPublicId,
            index: newIndex
        });

        const savedSection = await newSection.save();

        await revalidateAfterUploadSection();

        return NextResponse.json({ success: true, data: savedSection });
    } catch (error) {
        console.error('Error saving section:', error);
        return new Response(JSON.stringify({ message: 'Error uploading data', error: error.message }), { status: 500 });
    }
}


export async function PUT(req) {
    try {
        const body = await req.json();
        const { id, title, imageSquareLink, index, imageSquarePublicId, imageCoverLink, imageCoverPublicId } = body;
        const newIndex = Number(index);

        if (!id || !title || !newIndex || !imageSquareLink || !imageSquarePublicId || !imageCoverLink || !imageCoverPublicId) {
            return new Response(
                JSON.stringify({ message: 'All fields are required. Please fill in all fields.' }),
                { status: 400 }
            );
        }

        await dbConnect();

        const existingSection = await Section.findById(id);

        if (!existingSection) {
            return new Response(
                JSON.stringify({ message: 'Service not found.' }),
                { status: 404 }
            );
        }

        const prevLink = existingSection.link;

        // If index has changed, update the indices of other services
        if (existingSection.index !== newIndex) {
            await updateIndicesEdit(newIndex, existingSection.index);
        }

        // Update the service with new data
        existingSection.title = title;
        existingSection.imageSquareLink = imageSquareLink;
        existingSection.imageSquarePublicId = imageSquarePublicId;
        existingSection.imageCoverLink = imageCoverLink;
        existingSection.imageCoverPublicId = imageCoverPublicId;
        existingSection.index = newIndex;

        const updatedSection = await existingSection.save();

        await revalidateAfterEditSection(prevLink);

        return NextResponse.json({ success: true, data: updatedSection });

    } catch (error) {
        console.error('Error updating section:', error);
        return new Response(JSON.stringify({ message: 'Error updating data', error: error.message }), { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json(); // Get the ID from the request body

        await dbConnect(); // Ensure database connection

        // Check if the section exists
        const existingSection = await Section.findById(id);

        if (!existingSection) {
            return new Response(JSON.stringify({ message: 'Section not found' }), { status: 404 });
        }

        // Prevent deletion if there are associated courses
        if (existingSection.courses.length > 0) {
            return new Response(JSON.stringify({ message: 'Cannot delete while courses are found' }), { status: 400 });
        }

        // Delete the section by ID
        await Section.findByIdAndDelete(id);

        // Update indices of remaining sections
        await Section.updateMany(
            { index: { $gt: existingSection.index } },
            { $inc: { index: -1 } }
        );

        revalidateAfterDeleteSection(existingSection.link)

        return new Response(JSON.stringify({ message: 'Section deleted successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error deleting section:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}

