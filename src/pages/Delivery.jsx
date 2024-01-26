import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import Footer from "../components/Main/Footer";
import { Products } from "../components/Products/Products";
import SearchBar from "../components/Main/SearchBar";
import Carousel from "../components/Carousel/Carousel";
import CarouselBrand from "../components/Carousel/CarouselBrand";
import { CarouselItems } from "../components/Products/Products";
import { Brands } from "../components/Products/Products";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import Cross from "../components/Icons/Cross";
import CuisinesBtn from "../components/Button/CuisinesBtn";
import Filter from "../components/Icons/Filter";
import FilterBtn from "../components/Button/FilterBtn";

function ProductsList() {
  const [filteredProducts, setFilteredProducts] = useState(Products);
  const [isCheckedRating, setIsCheckedRating] = useState(false);
  const [isCheckedCuisines, setIsCheckedCuisines] = useState(false);
  const [numOfFilterItems, setNumOfFilterItems] = useState(0);

  const handleRatingFilterToggle = () => {
    setIsCheckedRating(!isCheckedRating);
    const filtered = Products.filter((product) => product.rating >= 4.0);
    setFilteredProducts(filtered);
  };

  const handleCuisinesFilterToggle = () => {
    setIsCheckedCuisines(!isCheckedCuisines);
  };

  useEffect(() => {
    setNumOfFilterItems(Number(numOfFilterItems) + 1);
  }, [isCheckedRating, isCheckedCuisines])

  return (
    <div>
      <SearchBar />

      <div className="h-auto mt-8">
        <div className="w-auto mx-12 flex">
          <Link to="/delivery">
            <div>
              <div className="flex w-[189px] mx-4 cursor-pointer">
                <div className="bg-slate-100 rounded-full w-[60px] h-[60px]">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                    alt="scooty-logo"
                    className="w-[30px] h-[30px] m-4"
                  />
                </div>
                <p className="text-[20px] text-slate-500  m-4">Delivery</p>
              </div>
              <div className="w-[189px] h-[2.5px] bg-red-400 rounded mt-4"></div>
            </div>
          </Link>

          <Link to="/diningout">
            <div>
              <div className="flex w-[189px] mx-4 cursor-pointer">
                <div className="bg-slate-100 rounded-full w-[60px] h-[60px]">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                    alt="scooty-logo"
                    className="w-[30px] h-[30px] m-4"
                  />
                </div>
                <p className="text-[20px] text-slate-500  m-4">Dining Out</p>
              </div>
            </div>
          </Link>
          <Link to="/nightlife">
            <div>
              <div className="flex w-[189px] mx-4 cursor-pointer">
                <div className="bg-slate-100 rounded-full w-[60px] h-[60px]">
                  <img
                    src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                    alt="drinks-logo"
                    className="w-[30px] h-[30px] m-4"
                  />
                </div>
                <p className="text-[20px] text-slate-500  m-4">Nightlife</p>
              </div>
            </div>
          </Link>
        </div>
        <hr />
      </div>

      <div
        className="w-full flex px-14 bg-white sticky top-0"
        style={{ zIndex: 1000 }}
      >
        <Button 
        onChange={<FilterBtn/>}
        >
          <Filter/>
          Filters
        </Button>
        <Button
          className={`${
            isCheckedRating
              ? "bg-red-400 text-slate-100"
              : "fill-current text-slate-500"
          }`}
          onClick={handleRatingFilterToggle}
        >
          {isCheckedRating ? (
            <div className="flex">
              Rating: 4.0+
              <Cross />
            </div>
          ) : (
            <div>Rating: 4.0+</div>
          )}
        </Button>
        <Button className="fill-current text-slate-500">Pure Veg</Button>
        <div className="relative">
        <Button
          className="fill-current text-slate-500"
          onClick={handleCuisinesFilterToggle}
        >
          Cuisines
          <svg className="w-[18px] h-[18px]">
            <path d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path>
          </svg>
        </Button>
        {isCheckedCuisines && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 1,
          }}>
            <CuisinesBtn/>
          </div>
        )}
        </div>
      </div>
      <Carousel items={CarouselItems} />
      <CarouselBrand items={Brands} />

      <div>
        <h1 className="w-[1100px] h-[36px] text-[30px] my-[20px] mx-[52px]">
          Best Food In Your City
        </h1>
        <div className="grid gap-x-4 gap-y-3 px-[30px] grid-cols-3">
          {isCheckedRating
            ? filteredProducts.map((product) => (
                <Card key={product.id} data={product} />
              ))
            : Products.map((product) => (
                <Card key={product.id} data={product} />
              ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductsList;
