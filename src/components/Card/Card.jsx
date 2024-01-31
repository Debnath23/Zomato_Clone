import React from "react";
import { CiStar } from "react-icons/ci";

const Card = ({data})=> {  
  const {image, title, description, rating, deliveryTime, forOne} = data;
  return (
    <div className="mt-5">
      <div className="rounded-lg  hover:shadow-lg hover:border-solid hover:border-2 hover:border-slate-100 cursor-pointer  max-w-sm mx-auto bg-auto p-1 overflow-hidden">
        <div className="">
          <img
            className="rounded-lg object-cover h-[250px] w-full"
            src={image}
            alt="image"
          />
        </div>
        <div className="p-1 mt-1">
          <div>
            <div className="flex my-1 justify-between text-2xl text-black">
              <div className="flex">
                <p>{title}</p>
              </div>
              <div className="flex items-end">
              <p className="px-[2px] flex items-center justify-center bg-green-800 rounded-md text-white">{rating} <CiStar className="w-[18px] h-[18px]" /></p>
              </div>
            </div>

            <div className="flex my-[2px] justify-between text-lg text-slate-500">
              <div className="flex items-start truncate">
                <p>{description}</p>
              </div>
              <div className="flex items-end">
                <p className="text-md">₹{forOne} for one</p>
              </div>
            </div>

            <div className="flex justify-end mt-[2px] text-md">
              <p>{deliveryTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Card;
