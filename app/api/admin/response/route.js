import dbConnect from "@/app/lib/mongodb";
import UserResponse from "@/app/Models/UserResponse";
import { NextResponse } from "next/server";
import { authorizeAdmin } from "../../lib/auth";

export async function GET(req) {
    const authResponse = await authorizeAdmin(req);
    if (authResponse) return authResponse;

    try {
        await dbConnect();
        const data = await UserResponse.find().sort({ createdAt: -1 });
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching response:', error);
        return NextResponse.json(
            { message: 'Error fetching response', error: error.message },
            { status: 500 }
        );
    }
}
export async function DELETE(request) {
    const authResponse = await authorizeAdmin(req);
    if (authResponse) return authResponse;
    try {
        const { id } = await request.json();
        await dbConnect();
        await UserResponse.findByIdAndDelete(id);

        return new Response(JSON.stringify({ message: 'HappyClient deleted successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error deleting Response:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}