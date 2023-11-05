import { NextRequest, NextResponse } from "next/server";
import Property from "@/models/propertyModel"; // Import your Property model
import { connect } from "@/dbConfig/dbConfig";
import { verifyJwtToken } from "@/lib/jwt";

export async function GET(req, ctx) {
    await connect();

    const id = ctx.params.id;

    try {
        const property = await Property.findById(id).populate("currentOwner").select("-password");

        await db.disconnect();

        return NextResponse.json(property, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req, ctx) {
    await connect();

    const id = ctx.params.id;
    const accessToken = req.headers.get("authorization");
    const token = accessToken.split(" ")[1];

    const decodedToken = verifyJwtToken(token);

    if (!accessToken || !decodedToken) {
        return NextResponse.json({ error: "unauthorized (wrong or expired token)" }, { status: 403 });
    }

    try {
        const body = await req.json();
        const property = await Property.findById(id).populate("currentOwner");

        if (property?.currentOwner?._id.toString() !== decodedToken._id.toString()) {
            return NextResponse.json({ msg: "Only the owner can update their property" }, { status: 403 });
        }

        const updatedProperty = await Property.findByIdAndUpdate(id, { $set: { ...body } }, { new: true });

        await db.disconnect();

        return NextResponse.json(updatedProperty, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req, ctx) {
    await connect();

    const id = ctx.params.id;

    const accessToken = req.headers.get("authorization");
    const token = accessToken.split(" ")[1];

    const decodedToken = verifyJwtToken(token);

    if (!accessToken || !decodedToken) {
        return NextResponse.json({ error: "unauthorized (wrong or expired token)" }, { status: 403 });
    }

    try {
        const property = await Property.findById(id).populate("currentOwner");
        if (property?.currentOwner?._id.toString() !== decodedToken._id.toString()) {
            return NextResponse.json({ msg: "Only the owner can delete their property" }, { status: 403 });
        }

        await Property.findByIdAndDelete(id);

        await db.disconnect();

        return NextResponse.json({ msg: "Successfully deleted property" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
