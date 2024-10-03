// middleware.js
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.JWT_SECRET;

export async function middleware(req) {
    // Get the token (includes user's role if you've set it in the session)
    const token = await getToken({ req, secret });

    // If no token is found, respond with "Unauthorized"
    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (token.role !== "admin" || token.role !== "boss") {
        return NextResponse.json({ error: "Forbidden: You do not have access" }, { status: 403 });
    }

    // Continue to the next middleware or the route handler if the token is valid and role is correct
    return NextResponse.next();
}

// Apply middleware to all routes starting with /api/admin
export const config = {
    matcher: "/api/admin/:path*", // Protects all /api/admin routes and subroutes
};
