'use server';
import Response from "../Models/Response";
import { revalidateAfterResponse } from "../lib/action";
import dbConnect from "../lib/mongodb";
export async function deleteResponse(formData) {
    const nextUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!nextUrl) {
        console.error('NEXT_PUBLIC_API_URL is not set.');
        return null;
    }
    const id = Object.fromEntries(formData).id;
    await dbConnect();
    await Response.findByIdAndDelete(id);

    revalidateAfterResponse();
}
