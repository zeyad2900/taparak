"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Success", response.data);
      toast.success("User Logged In");
      router.push("/dashboard");
    } catch (error) {
      console.log("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <label className="text-white" htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="text"
        name="email"
        id="email"
        value={user.email}
        onChange={(ev) => setUser({ ...user, email: ev.target.value })}
      />
      <label className="text-white" htmlFor="password">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="password"
        name="password"
        id="password"
        value={user.password}
        onChange={(ev) => setUser({ ...user, password: ev.target.value })}
      />
      <button
        className="p-2 border border-cyan-500 text-cyan-500 rounded-lg mb-4 focus:outline-none focus:border-cyan-600"
        onClick={onLogin}
      >
        Login
      </button>
      <Link
        className="p-2 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        href="/signup"
      >
        go to signup
      </Link>
      <Link
        className="p-2 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        href="/forgotpassword"
      >
        forgot password?
      </Link>
    </div>
  );
}