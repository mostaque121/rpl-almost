import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const secret = process.env.JWT_SECRET;
const allowedRoles = ["admin", "boss"];

export async function middleware(req) {
    try {
        const token = await getToken({ req, secret });

        if (!token) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Check the user role
        const userRole = token.role;
        if (!allowedRoles.includes(userRole)) {
            return NextResponse.json(
                { error: "Forbidden: Insufficient Permissions" },
                { status: 403 }
            );
        }

        return NextResponse.next();
    } catch (error) {
        console.error("Middleware error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export const config = {
    matcher: ["/api/admin/:path*", "/admin/:path*"],
    runtime: "experimental-edge",
};