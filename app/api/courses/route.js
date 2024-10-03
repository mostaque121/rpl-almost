export const dynamic = 'force-dynamic'
import dbConnect from '@/app/lib/mongodb';
import { Course } from '@/app/Models/models';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        await dbConnect();
        const data = await Course.find();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching services:', error);
        return new Response(
            JSON.stringify({ message: 'Error fetching services', error: error.message }),
            { status: 500 }
        );
    }
}


