export const dynamic = 'force-dynamic'
import dbConnect from "@/app/lib/mongodb";
import { Review } from "@/app/Models/models";
import { NextResponse } from "next/server";
export async function GET(req) {
    try {
        await dbConnect();

        // Populate purchasedCourse with specific fields: title and _id
        const data = await Review.find({ approved: false }).populate({
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