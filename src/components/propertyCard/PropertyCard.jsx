import Image from "next/image";
import React from "react";
import src from "../../assets/hero.jpg";

const PropertyCard = () => {
    return (
        <div className=" flex flex-col ">
            <div className="w-full rounded-t-3xl overflow-hidden">
                <Image alt="" src={src}></Image>
            </div>
            <div className=" text-black p-3 flex flex-col justify-center items-center bg-white rounded-b-xl">
                <p className=" font-medium opacity-40 text-center">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate velit culpa deserunt neque commodi magni repellat quam consequatur?{" "}
                </p>
                <h1 className="font-black text-4xl my-3">Card title</h1>
                <p className="font-medium text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum sunt, exercitationem enim dolore saepe asperiores? Laborum adipisci necessitatibus, velit culpa minima expedita
                    pariatur non molestias iusto id, provident ab deserunt!
                </p>
                <button class="my-3 cursor-pointer font-semibold overflow-hidden relative z-100 border border-cyan-500 group px-8 py-2">
                    <span class="relative z-10 text-black group-hover:text-white text-xl duration-500">More</span>
                    <span class="absolute w-full h-full bg-cyan-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
                    <span class="absolute w-full h-full bg-cyan-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;
