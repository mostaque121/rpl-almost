export const dynamic = 'force-dynamic'
import { authorizeAdmin } from "@/app/api/lib/auth";
import { revalidateAfterEditReview } from "@/app/lib/action";
import dbConnect from "@/app/lib/mongodb";
import { Review } from "@/app/Models/models";
import { NextResponse } from "next/server";
export async function GET(req) {
    const authResponse = await authorizeAdmin(req);
    if (authResponse) return authResponse;
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

export async function PUT(request) {
    const authResponse = await authorizeAdmin(req);
    if (authResponse) return authResponse;
    await dbConnect(); // Connect to the database

    try {
        const body = await request.json();
        const { id } = body;

        if (!id) {
            return NextResponse.json({ error: 'Review ID is required' }, { status: 400 });
        }

        // Update the review's approval status
        const result = await Review.findByIdAndUpdate(id, { approved: true }, { new: true });

        if (result) {
            revalidateAfterEditReview();
            return NextResponse.json({ message: 'Review approved successfully', review: result }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Failed to approve review' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error approving review:', error);
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}

// DELETE request - Delete a review
export async function DELETE(request) {
    const authResponse = await authorizeAdmin(req);
    if (authResponse) return authResponse;
    await dbConnect(); // Connect to the database

    try {
        const body = await request.json();
        const { id } = body;

        if (!id) {
            return NextResponse.json({ error: 'Review ID is required' }, { status: 400 });
        }

        // Delete the review from the database
        const result = await Review.findByIdAndDelete(id);

        if (result) {
            revalidateAfterEditReview();
            return NextResponse.json({ message: 'Review deleted successfully' }, { status: 200 });
        } else {
            return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
        }
    } catch (error) {
        console.error('Error deleting review:', error);
        return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
    }
}