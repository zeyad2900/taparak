import Image from "next/image";
import React from "react";
import img from "../../assets/hero.jpg";

const Hero = () => {
    return (
        <div className="h-screen overflow-hidden top-0 -z-10 fixed">
            <Image alt="" src={img} width={50000} height={100} layout="responsive"></Image>
        </div>
    );
};

export default Hero;
