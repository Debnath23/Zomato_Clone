import React from 'react'
import { Link } from "react-router-dom";
import MenuCard from '../Card/MenuCard'

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

      <div className="grid gap-x-8 gap-y-4 px-[50px] grid-cols-3">
        <Link to='/productlist'>
        <MenuCard title="Kolkata Restaurants" />
        </Link>
        
        <MenuCard title="Chennai Restaurants" />
        <MenuCard title="Hyderabad Restaurants" />

        <MenuCard title="Mumbai Restaurants" />
        <MenuCard title="Bengaluru Restaurants" />
        <MenuCard title="Delhi NCR Restaurants" />

        <MenuCard title="Gangtok Restaurants" />
        <MenuCard title="Indore Restaurants" />
        <MenuCard title="Udaipur Restaurants" />

        <MenuCard title="Ooty Restaurants" />
        <MenuCard title="Manali Restaurants" />
        <MenuCard title="Haridwar Restaurants" />

        <MenuCard title="Goa Restaurants" />
        <MenuCard title="Darjeeling Restaurants" />
        <MenuCard title="Jammu Restaurants" />
      </div>
      </>
    )
}

export default Main
