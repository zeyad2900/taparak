"use client";

import Image from "next/image";
import React from "react";
import img from "../../assets/hero.jpg";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="h-screen w-full bg-black">
            <div className="container mx-auto flex-col xl:flex-row flex justify-between items-center xl:items-start h-full">
                <div className=" ml-16  mt-5 mb-32 xl:mt-48 h-64 flex flex-col items-center md:items-start">
                    <p className="scale-in-center text-white font-thin text-2xl leading-loose">ALWAYS THE BEST WAY TO</p>
                    <h1 className="scale-in-center text-white font-black text-6xl md:text-8xl">Building</h1>
                    <h1 className="scale-in-center text-white font-black text-6xl md:text-8xl">Choices</h1>
                    <button className="jello-horizontal bg-white text-black mt-20 py-5 px-20 text-4xl flex justify-center items-center font-bold hover:bg-cyan-500 hover:text-white transition-colors duration-300 rounded-full">
                        Read more
                    </button>
                </div>
                <div className="xl:block xl:ml-16 mt-8 overflow-hidden w-full h-4/5 rounded-3xl ">
                    <Image className="kenburns-bottom" alt="" src={img} style={{ width: "100%", height: "100%" }}></Image>
                </div>
            </div>
        </div>
    );
};

export default Hero;
