"use client";
import React from "react";
import { navItems } from "@/constants";
import { CgMenuGridR } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import logo from "@/assets/logo.png";

const Navbar = () => {
    const [toggle, setToggle] = React.useState(false);

    return (
        <div className=" bg-black w-full h-24">
            <div className="container mx-auto">
                <nav className="w-full  justify-between px-6 items-center flex">
                    <Image src={logo} alt="logo" width={124} height={32} className="cursor-pointer sm:mt-4" priority={true} />
                    <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                        {navItems.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins font-normal cursor-pointer text-[16px] text-[#dfe6e9] ${
                                    index === navItems.length - 1 ? "mr-2" : "mr-10"
                                } hover:border-b-2 hover:border-cyan-500`}
                            >
                                <a href={`#${nav.id}`}>{nav.name}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="sm:hidden flex flex-1 justify-end items-center">
                        {toggle ? (
                            <AiOutlineClose className={`color-white w-[40px] h-[40px] cursor-pointer mr-4`} onClick={() => setToggle(false)} />
                        ) : (
                            <CgMenuGridR className={`color-white w-[40px] h-[40px] cursor-pointer mr-4 mt-4`} onClick={() => setToggle(true)} />
                        )}
                        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-[#fff] top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                            <ul className="list-none flex flex-col">
                                {navItems.map((nav, index) => (
                                    <a key={nav.id} href={`#${nav.id}`}>
                                        <li
                                            className={`font-poppins font-normal cursor-pointer text-[16px] text-[#07070A] ${
                                                index === navItems.length - 1 ? "mr-2" : "mr-8"
                                            } hover:border-b-2 hover:border-[#dfe6e9]`}
                                        >
                                            {nav.name}
                                        </li>
                                    </a>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
