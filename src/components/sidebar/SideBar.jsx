import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const SideBar = () => {
    return (
        <div>
            <ul className="fixed top-1/2 right-3 rounded-full overflow-hidden transform -translate-y-1/2 bg-cyan-500">
                <a href="#">
                    <li className="text-white p-4 hover:bg-black cursor-pointer flex justify-center items-center transition-colors duration-300">
                        <FaFacebookF></FaFacebookF>
                    </li>
                </a>
                <a href="#">
                    <li className="text-white p-3 hover:bg-black cursor-pointer flex justify-center items-center transition-colors duration-300">
                        <FaXTwitter></FaXTwitter>
                    </li>
                </a>
                <a href="#">
                    <li className="text-white p-3 hover:bg-black cursor-pointer flex justify-center items-center transition-colors duration-300">
                        <FaTwitter></FaTwitter>
                    </li>
                </a>
                <a href="#">
                    <li className="text-white p-3 hover:bg-black cursor-pointer flex justify-center items-center transition-colors duration-300">
                        <FaLinkedinIn></FaLinkedinIn>
                    </li>
                </a>
                <a href="#">
                    <li className="text-white p-3 hover:bg-black cursor-pointer flex justify-center items-center transition-colors duration-300">
                        <FaTelegram></FaTelegram>
                    </li>
                </a>
            </ul>
        </div>
    );
};

export default SideBar;
