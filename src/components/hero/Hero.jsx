"use client";

import Image from "next/image";
import React from "react";
import img from "../../assets/hero.jpg";

const Hero = () => {
    return (
        <div className="h-screen w-full bg-black">
            <div className="container mx-auto flex-col xl:flex-row flex sm:justify-center justify-between h-full">
                <div className=" ml-16  mt-48 h-64 flex flex-col items-center md:items-start">
                    <p className="text-white font-thin text-2xl leading-loose">ALWAYS THE BEST WAY TO</p>
                    <h1 className="text-white font-black text-6xl md:text-8xl">Building</h1>
                    <h1 className="text-white font-black text-6xl md:text-8xl">Choices</h1>
                </div>
                <div className=" xl:block ml-16 mt-8 overflow-hidden w-full h-4/5 rounded-3xl ">
                    <Image alt="" src={img} style={{ width: "100%", height: "100%" }}></Image>
                </div>
            </div>
        </div>
    );
};

export default Hero;
