import dbConnect from "@/app/lib/mongodb";
import UserResponse from "@/app/Models/UserResponse";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, message, interest } = body;

        if (!name || !email || !phone || !message) {
            return new Response(
                JSON.stringify({ message: 'All fields are required. Please fill in all fields.' }),
                { status: 400 }
            );
        }

        await dbConnect();

        const newResponse = new UserResponse({
            name,
            email,
            phone,
            message,
            interest: interest ? interest : "",
        });

        const savedResponse = await newResponse.save();

        return NextResponse.json({ success: true, data: savedResponse });
    } catch (error) {
        console.error('Error saving response:', error);
        return new Response(
            JSON.stringify({ message: 'Error uploading response', error: error.message }),
            { status: 500 }
        );
    }
}
