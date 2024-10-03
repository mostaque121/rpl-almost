import { Section } from '@/app/Models/models';
import dbConnect from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const { section } = params;
    try {
        await dbConnect();
        const data = await Section.findOne({ link: section }).populate({
            path: 'courses',
            select: 'link imageSquareLink imageCoverLink title index _id',
            options: { sort: { index: 1 } },
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching services:', error);
        return new Response(
            JSON.stringify({ message: 'Error fetching Sections', error: error.message }),
            { status: 500 }
        );
    }
}