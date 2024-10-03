import { revalidateAfterReview } from '@/app/lib/action';
import dbConnect from '@/app/lib/mongodb';
import { Course, Review } from '@/app/Models/models';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await dbConnect();

        const body = await req.json();
        const { userName, userEmail, userImage, purchasedCourse, reviewText, reviewImage, givenStar } = body;

        // Validate required fields
        const requiredFields = { userName, userEmail, userImage, purchasedCourse, reviewText, reviewImage, givenStar };
        const missingFields = Object.entries(requiredFields).filter(([, value]) => !value).map(([key]) => key);

        if (missingFields.length > 0) {
            return NextResponse.json(
                { message: `Missing fields: ${missingFields.join(', ')}` },
                { status: 400 }
            );
        }

        // Check if the course exists
        const existingCourse = await Course.findById(purchasedCourse);
        if (!existingCourse) {
            return NextResponse.json(
                { errors: { course: 'No course found with the provided data.' } },
                { status: 400 }
            );
        }

        // Create a new review
        const newReview = new Review({
            userName,
            userEmail,
            userImage,
            purchasedCourse,
            reviewText,
            reviewImage,
            givenStar
        });

        // Save the review
        const savedReview = await newReview.save();
        revalidateAfterReview();
        // Return success response
        return NextResponse.json({ success: true, data: savedReview }, { status: 201 });
    } catch (error) {
        console.error('Error saving Review:', error);
        return NextResponse.json(
            { message: 'Error uploading data', error: error.message },
            { status: 500 }
        );
    }
}

export async function GET(req) {
    try {
        await dbConnect();

        // Populate purchasedCourse with specific fields: title and _id
        const data = await Review.find({ approved: true }).populate({
            path: 'purchasedCourse',
            select: 'title _id link',
        }).sort({ createdAt: -1 });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching Review:', error);
        return new Response(
            JSON.stringify({ message: 'Error fetching review', error: error.message }),
            { status: 500 }
        );
    }
}
