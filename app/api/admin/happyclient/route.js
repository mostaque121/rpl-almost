
import dbConnect from "@/app/lib/mongodb";
import HappyClient from "@/app/Models/HappyClient";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();

        const { image, imagePublicId } = body;

        if (!image || !imagePublicId) {
            return new Response(
                JSON.stringify({ message: 'All fields are required. Please fill in all fields.' }),
                { status: 400 }
            );
        }
        await dbConnect();

        const newHappyClient = new HappyClient({
            image,
            imagePublicId
        });

        const savedHappyClient = await newHappyClient.save();
        return NextResponse.json({ success: true, data: savedHappyClient });
    } catch (error) {
        console.error('Error saving HappyClient:', error);
        return new Response(JSON.stringify({ message: 'Error uploading HappyClient', error: error.message }), { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();

        await dbConnect();

        await HappyClient.findByIdAndDelete(id);

        return new Response(JSON.stringify({ message: 'HappyClient deleted successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error deleting HappyClient:', error); // Updated log message
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}

