"use client"
import React, { useState } from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import axios from "axios";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const clickHandler = () => {
    setUserData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
    setSubmitted(false);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (response.status === 201) {
            // Handle successful registration
            setSubmitted(true);
        } else {
            // Handle registration error
            console.error("Error submitting the contact data.");
        }
    } catch (error) {
        console.error("Error:", error);
    }
};

  return (
    <div className="text-white h-screen">
      <div className="container">
        <div className="flex flex-col items-center justify-center h-screen dark">
          {submitted ? (
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Thanks for contacting us!</h2>
              <RiCheckDoubleFill className="text-green-500 text-4xl mb-4" />
              <p>We will contact you soon.</p>
            </div>
          ) : (
            <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-200 mb-4">Contact Us</h2>
              <form className="flex flex-wrap" onSubmit={submitHandler}>
                <input
                  type="text"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                  placeholder="Name"
                  name="name"
                  id="name"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
                <input
                  type="email"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                />
                <input
                  type="number"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={userData.phoneNumber}
                  onChange={(e) => setUserData({ ...userData, phoneNumber: e.target.value })}
                />
                <textarea
                  name="message"
                  className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                  placeholder="Message"
                  id="message"
                  value={userData.message}
                  onChange={(e) => setUserData({ ...userData, message: e.target.value })}
                ></textarea>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
