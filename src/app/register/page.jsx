"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";



export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        username: "",
        password: "",
        email: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/register", user);
            console.log("Success", response.data);
            router.push("/login");
        } catch (error) {
            console.log("Error", error.message);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (user.username.length > 0 && user.password.length > 0 && user.email.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Proccessing" : "Sign-Up"}</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" placeholder="User Name" type="text" name="username" id="username" value={user.username} onChange={(ev) => setUser({ ...user, username: ev.target.value })} />
            <label htmlFor="password">Password</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" placeholder="Password" type="password" name="password" id="password" value={user.password} onChange={(ev) => setUser({ ...user, password: ev.target.value })} />
            <label htmlFor="email">Email</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" placeholder="E-mail" type="email" name="email" id="email" value={user.email} onChange={(ev) => setUser({ ...user, email: ev.target.value })} />
            <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" onClick={onSignup}>{buttonDisabled ? "Please fill all" : "SignUp"}</button>
            <Link className="p-2 rounded-lg mb-4 focus:outline-none focus:border-gray-600" href="/login">
                go to login
            </Link>
        </div>
    )
}