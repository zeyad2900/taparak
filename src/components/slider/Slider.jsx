"use client";

import React, { useState } from "react";
import src from "../../assets/hero.jpg";
import Image from "next/image";
import "./Slide.css";

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
            img: src,
        },
        {
            id: 3,
            content: "hotel",
            img: src,
        },
        {
            id: 4,
            content: "hotel",
            img: src,
        },
        {
            id: 5,
            content: "hotel",
            img: src,
        },
        {
            id: 6,
            content: "hotel",
            img: src,
        },
        {
            id: 7,
            content: "hotel",
            img: src,
        },
        {
            id: 8,
            content: "hotel",
            img: src,
        },
        {
            id: 9,
            content: "hotel",
            img: src,
        },
        {
            id: 10,
            content: "hotel",
            img: src,
        },
        {
            id: 11,
            content: "hotel",
            img: src,
        },
    ];

    return (
        <div className=" my20 text-white bg-black">
            <div className=" container h-full  mx-auto w-full flex flex-col justify-start items-center">
                <div className=" h-1/2 mt-0 w-2/3 overflow-hidden rounded-xl">
                    <Image alt={arrOfImg[imgNum].id} src={arrOfImg[imgNum].img} style={{ width: "100%", height: "100%" }}></Image>
                </div>
                <div>
                    <h1 className=" mt-16">{arrOfImg[imgNum].id}</h1>
                </div>

                <div>
                    <button
                        className=" mt-auto"
                        onClick={() => {
                            setImgNum(imgNum + 1);
                        }}
                    >
                        next
                    </button>

                    <button
                        onClick={() => {
                            setImgNum(imgNum - 1);
                        }}
                    >
                        prev
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Slider;
