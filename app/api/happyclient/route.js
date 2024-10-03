export const dynamic = 'force-dynamic'
import dbConnect from "@/app/lib/mongodb";
import HappyClient from "@/app/Models/HappyClient";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        await dbConnect();
        const data = await HappyClient.find();
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching HappyClient:', error);
        return new Response(
            JSON.stringify({ message: 'Error fetching HappyClient', error: error.message }),
            { status: 500 }
        );
    }
}