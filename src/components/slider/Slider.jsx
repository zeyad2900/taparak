"use client";

import React, { useState } from "react";
import Image from "next/image";
import src from "../../assets/hero.jpg";
import src2 from "../../assets/download.jpeg"
import "./Slide.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

function Slider() {
    const [imgNum, setImgNum] = useState(0);

    const arrOfImg = [
        {
            id: 1,
            content: "hotel",
            img: src,
        },
        {
            id: 2,
            content: "hotel",
            img: src2,
        },
        {
            id: 3,
            content: "hotel",
            img: src,
        },
        {
            id: 4,
            content: "hotel",
            img: src2,
        },
        {
            id: 5,
            content: "hotel",
            img: src,
        },
        {
            id: 6,
            content: "hotel",
            img: src2,
        },
        {
            id: 7,
            content: "hotel",
            img: src,
        },
        {
            id: 8,
            content: "hotel",
            img: src2,
        },
        {
            id: 9,
            content: "hotel",
            img: src,
        },
        {
            id: 10,
            content: "hotel",
            img: src2,
        },
        {
            id: 11,
            content: "hotel",
            img: src,
        },
    ];
    const next = () => {
        if (imgNum === arrOfImg.length - 1) {
            setImgNum(0);
        } else {
            setImgNum(imgNum + 1);
        }
    };
    const prev = () => {
        if (imgNum === 0) {
            setImgNum(arrOfImg.length - 1);
        } else {
            setImgNum(imgNum - 1);
        }
    };

    return (
        <div className=" my20 text-white bg-black">
            <div className=" container h-screen  mx-auto w-full flex flex-col justify-start items-center">
                <div className="flex justify-center items-center w-full h-full ">
                    <button
                        className=" mr-5 bg-cyan-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-cyan-700 active:bg-purple-900 focus:outline-none"
                        onClick={() => {
                            prev();
                        }}
                    >
                        <FaArrowLeftLong></FaArrowLeftLong>
                    </button>

                    <div className=" h-1/2 xl:h-full mt-0 w-2/3 overflow-hidden rounded-xl ">
                        <Image alt={arrOfImg[imgNum].id} src={arrOfImg[imgNum].img} style={{ width: "100%", height: "100%" }}></Image>
                    </div>
                    <button
                        className=" ml-5 bg-cyan-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-cyan-700 active:bg-purple-900 focus:outline-none"
                        onClick={() => {
                            next();
                        }}
                    >
                        <FaArrowRightLong></FaArrowRightLong>
                    </button>
                </div>
                <div className=" mt-8 w-2/4 rounded-xl flex justify-center items-center">
                    <h1 className="">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro a necessitatibus vero quasi numquam asperiores molestias quo eligendi officiis ipsa in, quidem cupiditate
                        excepturi dolores assumenda explicabo dicta praesentium sint?
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Slider;
