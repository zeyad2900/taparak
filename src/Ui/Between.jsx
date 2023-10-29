"use client";

import React from "react";
import classes from "./Between.module.css";

const Between = (props) => {
    return (
        <div className=" bg-black my-20">
            <div className={`${classes.button} mx-auto w-2/4 flex items-center justify-center h-20 rounded-full text-white`}>
                <h1>{props.content}</h1>
            </div>
        </div>
    );
};

export default Between;
