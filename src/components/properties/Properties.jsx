"use client";

import React from "react";
import PropertyCard from "../propertyCard/PropertyCard";

const Properties = () => {
    return (
        <div className=" my-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
                <PropertyCard />
            </div>
        </div>
    );
};

export default Properties;
