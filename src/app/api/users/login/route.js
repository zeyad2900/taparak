import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';

connect()

export async function POST(request){
    try {
        const reqBody = await request.json()
        const {username, password} = reqBody;
        console.log(reqBody)

        // Check if user already exists
        const user = await User.findOne({username})
        if (!user) {
            return NextResponse.json({error: 'User does not exist'}, {status: 400})
        } 

        console.log("user exists");

        // Check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password)
        if (!validPassword) {
            return NextResponse.json({error: 'Invalid password'}, {status: 400})
        }

        // Create and assign a token
        const tokenData = {
            id: user._id,
            email: user.email,
            username: user.username
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {expiresIn: '1m'})

        const response = NextResponse.json({
            message: 'User logged in successfully',
            success: true,
            token
        })

        response.cookies.set('token', token, {
            httpOnly: true,
            //maxAge: 24 * 60 * 60 * 1000 // 1 day
        })

        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}