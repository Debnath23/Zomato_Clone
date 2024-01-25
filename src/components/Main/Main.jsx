import React from "react";
import { Link } from "react-router-dom";
import MenuCard from "../Card/MenuCard";
import { City } from "../Products/Products";

function Main() {
  return (
    <>
      <div className="w-full h-auto mt-16">
        <div className="flex justify-center">
          <p className="text-5xl mx-5">Popular locations in</p>
          <img
            className=" mx-5"
            src="https://b.zmtcdn.com/images/flags_z10/in.png?output-format=webp"
            alt="indian-flag"
          />
          <p className="text-5xl mx-5">India</p>
        </div>

        <div className="text-3xl text-slate-600 justify-center mx-[150px] my-[80px] grid-flow-col ">
          From swanky upscale restaurants to the cosiest hidden gems serving the
          most incredible food, Zomato covers it all. Explore menus, and
          millions of restaurant photos and reviews from users just like you, to
          find your next great meal.
        </div>
      </div>

      <div className="grid grid-cols-3 ml-7">
        {City.map((item, index) => (
          <Link to="/delivery">
            <MenuCard key={index} title={item} />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Main;
