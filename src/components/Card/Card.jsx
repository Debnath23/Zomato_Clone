import React from "react";
import Star from "../Icons/Star";

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
            <div className="flex my-1 text-2xl text-black">
              <div className="w-3/4 flex items-start overflow-x-auto">
                <p>{title}</p>
              </div>
              <div className="w-1/4 flex items-end">
                <p className="p-[2px] flex bg-green-800 rounded-md text-white">{rating} <Star/> </p>
              </div>
            </div>

            <div className="flex my-[2px] text-lg text-slate-500">
              <div className="w-3/4 flex items-start overflow-x-auto  ">
                <p>{description}</p>
              </div>
              <div className="w-1/3 flex items-end">
                <p className="text-md">₹{forOne} for one</p>
              </div>
            </div>

            <div className="flex items-end mt-[2px] text-md">
              <p>{deliveryTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default Card;
