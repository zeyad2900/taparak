import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const SideBar = () => {
    return (
        <div className="fixed top-1/2 right-3 transform -translate-y-1/2 z-20">
            <ul>
                <a href="#">
                    <li className="text-white p-4 hover:bg-black cursor-pointer flex justify-center items-center transition-colors duration-300 bg-cyan-500 rounded-full mb-2">
                        <FaFacebookF></FaFacebookF>
                    </li>
                </a>
                <a href="#">
                    <li className="text-white p-4 hover:bg-black cursor-pointer flex justify-center items-center transition-colors duration-300 bg-cyan-500 rounded-full mb-2">
                        <FaInstagram></FaInstagram>
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SideBar;
