import { connect } from "@/dbConfig/dbConfig";
import Contact from "@/models/contactModel";
import { NextRequest, NextResponse } from "next/server";

connect(); // Establish a connection to the database

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { name, email, phoneNumber, message } = reqBody;

        // Create a new contact entry
        const newContact = new Contact({
            name,
            email,
            phoneNumber,
            message,
        });

        const savedContact = await newContact.save();

        return NextResponse.json(savedContact, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}