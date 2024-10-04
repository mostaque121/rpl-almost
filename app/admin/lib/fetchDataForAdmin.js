import User from "@/app/Models/User";
import UserResponse from "@/app/Models/UserResponse";
import { Review } from "@/app/Models/models";
import dbConnect from "@/app/lib/mongodb";
import { unstable_cache } from "next/cache";

export async function fetchUser() {
    try {
        await dbConnect();
        const data = await User.find().sort({ createdAt: -1 });
        const users = JSON.parse(JSON.stringify(data))
        return users;
    } catch (error) {
        console.error('Error fetching User:', error);
        throw new Error('Error fetching users');
    }
}
export const fetchAllReview = unstable_cache(
    async () => {
        try {
            await dbConnect(); // Ensure you're connected to the database
            const data = await Review.find({ approved: true }).populate({
                path: 'purchasedCourse',
                select: 'title _id link',
            }).sort({ createdAt: -1 });

            // Convert to plain JSON object
            const reviews = JSON.parse(JSON.stringify(data));
            return reviews; // Return the plain data
        } catch (error) {
            console.error('Error fetching Reviews:', error);
            throw new Error('Error fetching Reviews');
        }
    },
    ['review'],
    { revalidate: 3600, tags: ['review'] }
);
export const fetchPendingReview = unstable_cache(
    async () => {
        try {
            await dbConnect(); // Ensure you're connected to the database
            const data = await Review.find({ approved: false }).populate({
                path: 'purchasedCourse',
                select: 'title _id link',
            }).sort({ createdAt: -1 });

            // Convert to plain JSON object
            const reviews = JSON.parse(JSON.stringify(data));
            return reviews; // Return the plain data
        } catch (error) {
            console.error('Error fetching Reviews:', error);
            throw new Error('Error fetching Reviews');
        }
    },
    ['review'],
    { revalidate: 3600, tags: ['review'] }
);

export async function fetchResponse() {
    try {
        await dbConnect();
        const data = await UserResponse.find().sort({ createdAt: -1 });
        const responses = JSON.parse(JSON.stringify(data))
        return responses;
    } catch (error) {
        console.error('Error fetching Reviews:', error);
        throw new Error('Error fetching Reviews');
    }
}


