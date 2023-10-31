import React from "react";
import { sideNavItems } from "@/constants";

const SideBar = () => {
    return (
        <div className="fixed top-1/2 right-3 transform -translate-y-1/2 z-20">
            <ul>
                {sideNavItems.map((ele) => {
                    return (
                        <a key={ele.id} href={ele.link} target="blank">
                            <li className="text-white p-4 hover:bg-black hover:text-cyan-500 cursor-pointer flex justify-center items-center transition-colors duration-300 bg-cyan-500 rounded-full mb-2">
                                {ele.icon}
                            </li>
                        </a>
                    );
                })}
            </ul>
        </div>
    );
};

export default SideBar;
