import React from "react";
import PropertyCard from "../propertyCard/PropertyCard";
import logo from "../../assets/logo.png";

const Properties = () => {
  // Use your property data here
  const propertyData = [
    {
      _id: 1,
      title: "Property 1",
      description: "Description for Property 1",
      image: logo
    },
    {
      _id: 2,
      title: "Property 2",
      description: "Description for Property 2",
      image: logo
    },
    // Add more property objects as needed
  ];

  return (
    <div className="my-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {propertyData.map((property) => (
            <PropertyCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
