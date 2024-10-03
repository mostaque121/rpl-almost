import dbConnect from "@/app/lib/mongodb";
import User from "@/app/Models/User";
import { NextResponse } from "next/server";
import { authorizeAdmin, authorizeBoss } from "../../lib/auth";

export async function GET(req) {
    const authResponse = await authorizeAdmin(req);
    if (authResponse) return authResponse;
    try {
        await dbConnect();
        const data = await User.find().sort({ createdAt: -1 })
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching User:', error);
        return new Response(
            JSON.stringify({ message: 'Error fetching User', error: error.message }),
            { status: 500 }
        );
    }
}

export async function PUT(request) {
    const authResponse = await authorizeBoss(req);
    if (authResponse) return authResponse;
    try {
        const { userId, role } = await request.json();

        await dbConnect();

        const updatedUser = await User.findByIdAndUpdate(userId, { $set: { role: role } }, { new: true });


        if (!updatedUser) {
            return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
        }

        return new Response(JSON.stringify({ message: 'User role updated successfully' }), { status: 200 });
    } catch (error) {
        console.error('Error updating user role:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}