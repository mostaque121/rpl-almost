// middleware/auth.js
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function authorizeAdmin(req) {
    const session = await getServerSession(authOptions);
    if (!session || (session.user.role !== 'admin' && session.user.role !== 'boss')) {
        return NextResponse.json(
            { message: 'Unauthorized' },
            { status: 403 }
        );
    }
}

export async function authorizeBoss(req) {
    const session = await getServerSession(authOptions);
    if (!session || session.user.role !== 'boss') {
        return NextResponse.json(
            { message: 'Unauthorized' },
            { status: 403 }
        );
    }
}
