"use client";

import React, { useState } from "react";

const Contact = () => {
    const [UserData, setUserData] = useState({});

    const clickHandler = () => {
        console.log(UserData);
        setUserData({
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div classNameName="text-white h-screen">
            <div classNameName="container">
                <div className="flex flex-col items-center justify-center h-screen dark">
                    <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-gray-200 mb-4">Contact Us</h2>
                        <form className="flex flex-wrap" onSubmit={submitHandler}>
                            <input
                                type="text"
                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                                placeholder="Name"
                                name="name"
                                id="name"
                                value={UserData.name}
                                onChange={(e) => {
                                    setUserData({ name: e.target.value });
                                }}
                            />
                            <input
                                type="email"
                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                                placeholder="Email"
                                name="email"
                                id="email"
                                value={UserData.email}
                                onChange={(e) => {
                                    setUserData({ ...UserData, email: e.target.value });
                                }}
                            />
                            <input
                                type="number"
                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                id="phoneNumber"
                                value={UserData.phoneNumber}
                                onChange={(e) => {
                                    setUserData({ ...UserData, phoneNumber: e.target.value });
                                }}
                            />
                            <textarea
                                name="message"
                                className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
                                placeholder="Message"
                                id="message"
                                value={UserData.message}
                                onChange={(e) => {
                                    setUserData({ ...UserData, message: e.target.value });
                                }}
                            ></textarea>
                            <button
                                onClick={() => {
                                    clickHandler();
                                }}
                                type="submit"
                                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
