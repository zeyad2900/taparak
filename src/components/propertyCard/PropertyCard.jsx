import Image from "next/image";
import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full rounded-t-3xl overflow-hidden">
        {/* Use property.image as the source */}
        <Image alt="test" src={property.image} width={800} height={600} />
      </div>
      <div className="text-black p-3 flex flex-col justify-center items-center bg-white rounded-b-xl">
        <h1 className="font-black text-4xl my-3">{property.title}</h1>
        <p className="font-medium text-center">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
