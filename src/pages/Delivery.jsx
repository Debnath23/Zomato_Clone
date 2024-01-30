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
  const [filteredPureVegProducts, setFilteredPureVegProducts] =
    useState(Products);
  const [filteredBothProducts, setFilteredBothProducts] = useState(Products);
  const [isCheckedRating, setIsCheckedRating] = useState(false);
  const [isCheckedPureVeg, setIsCheckedPureVeg] = useState(false);
  const [isCheckedCuisines, setIsCheckedCuisines] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  const handleRatingFilterToggle = () => {
    setIsCheckedRating(!isCheckedRating);

    let filtered;
    if (!isCheckedRating) {
      filtered = Products.filter((product) => product.rating >= 4.0);
      setFilterCount((prevCount) => prevCount + 1);
    } else {
      filtered = Products;
      setFilterCount((prevCount) => prevCount - 1);
    }
    setFilteredProducts(filtered);
  };

  const handlePureVegFilterToggle = () => {
    setIsCheckedPureVeg(!isCheckedPureVeg);

    let filtered;
    if (!isCheckedPureVeg) {
      filtered = Products.filter((product) => product.pureVeg == true);
      setFilterCount((prevCount) => prevCount + 1);
    } else {
      filtered = Products;
      setFilterCount((prevCount) => prevCount - 1);
    }
    setFilteredPureVegProducts(filtered);
  };

  useEffect(() => {
    const filtered = Products.filter((product) => {
      return (
        isCheckedRating &&
        product.rating >= 4.0 &&
        isCheckedPureVeg &&
        product.pureVeg === true
      );
    });
    setFilteredBothProducts(filtered);
  }, [isCheckedRating, isCheckedPureVeg]);

  const handleCuisinesFilterToggle = () => {
    setIsCheckedCuisines(!isCheckedCuisines);
  };

  return (
    <div>
      <SearchBar />

      <div className="h-auto mt-8 mx-[209.6px]">
        <div className="w-auto flex">
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
        className="w-full flex  mx-[209.6px] bg-white sticky top-0"
        style={{ zIndex: 1000 }}
      >
        <Button>
          {(isCheckedRating || isCheckedPureVeg) && <FilterBtn filterCount={filterCount} />}
          <Filter />
          <p className="text-slate-500">Filters</p>
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

        <Button
          className={`${
            isCheckedPureVeg
              ? "bg-red-400 text-slate-100"
              : "fill-current text-slate-500"
          }`}
          onClick={handlePureVegFilterToggle}
        >
          {isCheckedPureVeg ? (
            <div className="flex">
              Pure Veg
              <Cross />
            </div>
          ) : (
            <div>Pure Veg</div>
          )}
        </Button>

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
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                zIndex: 1,
              }}
            >
              <CuisinesBtn />
            </div>
          )}
        </div>
      </div>

      <Carousel items={CarouselItems} />
      <CarouselBrand items={Brands} />

      <div className="px-[209.6px]">
        <h1 className="w-[1100px] h-[36px] text-[30px] my-[20px]">
          Best Food In Your City
        </h1>
        <div className="grid gap-x-4 gap-y-3 grid-cols-3">
          {isCheckedRating && isCheckedPureVeg
            ? filteredBothProducts.map((product) => (
                <Card key={product.id} data={product} />
              ))
            : isCheckedRating
            ? filteredProducts.map((product) => (
                <Card key={product.id} data={product} />
              ))
            : isCheckedPureVeg
            ? filteredPureVegProducts.map((product) => (
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
