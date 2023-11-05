import { NextRequest, NextResponse } from "next/server";
import Property from "@/models/propertyModel"; // Import your Property model
import { connect } from "@/dbConfig/dbConfig";

export async function GET(req) {
    try {
        await connect(); // Ensure a database connection

        // Fetch properties from your database
        const properties = await Property.find().exec();

        await db.disconnect(); // Disconnect from the database

        return NextResponse.json({
            message: "Properties found",
            data: properties
        });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}
