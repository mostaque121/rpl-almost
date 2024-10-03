export const dynamic = 'force-dynamic'
import { Section } from '@/app/Models/models';
import dbConnect from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        await dbConnect();
        const data = await Section.find()
            .sort({ index: 1 })
            .populate({
                path: 'courses',
                select: 'link imageSquareLink imageCoverLink title index _id',
                options: { sort: { index: 1 } }, // Sort Courses by index
            });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching Section:', error);
        return new Response(
            JSON.stringify({ message: 'Error fetching Sections', error: error.message }),
            { status: 500 }
        );
    }
}