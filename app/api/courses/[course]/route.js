import { Course } from '@/app/Models/models';
import dbConnect from '@/app/lib/mongodb';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const { course } = params;
    try {
        await dbConnect();
        const data = await Course.findOne({ link: course })
            .populate({
                path: 'section',
                select: 'link',
            });

        return NextResponse.json(data);

    } catch (error) {
        console.error('Error fetching Course:', error);
        return new Response(
            JSON.stringify({ message: 'Error fetching Course', error: error.message }),
            { status: 500 }
        );
    }
}