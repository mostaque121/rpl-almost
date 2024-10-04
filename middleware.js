import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.JWT_SECRET;

export async function middleware(req) {

    const token = await getToken({ req, secret });

    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check the user role
    const userRole = token.role;
    if (userRole !== "admin" && userRole !== "boss") {
        return NextResponse.json({ error: "Forbidden: Insufficient Permissions" }, { status: 403 });
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/api/admin/:path*",
};