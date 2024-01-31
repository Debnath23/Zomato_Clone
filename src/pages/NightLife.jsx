import React, { useEffect, useState } from "react"
import Footer from '../components/Main/Footer'
import SearchBar from '../components/Main/SearchBar'
import FilterBtn from '../components/Button/FilterBtn'
import GoldBtn from '../components/Button/GoldBtn'
import Button from '../components/Button/Button'
import CollectionsCarousel from '../components/Carousel/CollectionsCarousel'
import { NightLifeImage } from '../components/Products/Products'
import { DiningOutNightLifeProducts } from '../components/Products/Products'
import DiningOutCard from '../components/Card/DiningOutCard'
import { Link } from 'react-router-dom'
import Filter from '../components/Icons/Filter'
import Cross from "../components/Icons/Cross"

function NightLife() {
  const [filteredRatingProducts, setFilteredRatingProducts] = useState(DiningOutNightLifeProducts);
  const [filteredPubsBarsProducts, setFilteredPubsBarsProducts] = useState(DiningOutNightLifeProducts);
  const [filteredBothsProducts, setFilteredBothsProducts] = useState(DiningOutNightLifeProducts);
  const [isCheckedRating, setIsCheckedRating] = useState(false);
  const [isCheckedPubsBars, setIsCheckedPubsBars] = useState(false);
  const [filterCount, setFilterCount] = useState(0);

  const handleRatingFilterToggle = () => {
    setIsCheckedRating(!isCheckedRating);

    let filtered;
    if (!isCheckedRating) {
      filtered = DiningOutNightLifeProducts.filter((product) => product.rating >= 4.0);
      setFilterCount((prevCount) => prevCount + 1);
    } else {
      filtered = DiningOutNightLifeProducts;
      setFilterCount((prevCount) => prevCount - 1);
    }
    setFilteredRatingProducts(filtered);
  };

  const handlePubsBarsFilterToggle = () => {
    setIsCheckedPubsBars(!isCheckedPubsBars);

    let filtered;
    if (!isCheckedPubsBars) {
      filtered = DiningOutNightLifeProducts.filter((product) => product.pubsBars == true);
      setFilterCount((prevCount) => prevCount + 1);
    } else {
      filtered = DiningOutNightLifeProducts;
      setFilterCount((prevCount) => prevCount - 1);
    }
    setFilteredPubsBarsProducts(filtered);
  };

  useEffect(() => {
    const filtered = DiningOutNightLifeProducts.filter((product) => {
      return (
        isCheckedRating &&
        product.rating >= 4.0 &&
        isCheckedPubsBars &&
        product.pubsBars === true 
      );
    });
    setFilteredBothsProducts(filtered);
  }, [isCheckedRating, isCheckedPubsBars]);

  return (
    <div>
      <SearchBar />
      
      <div className="h-auto mt-8 ml-[209.6px]">
      <div className="w-auto flex">
        <Link to="/delivery">
          <div>
            <div className="flex w-[189px] mx-4 cursor-pointer">
              <div
                className="bg-slate-100 rounded-full w-[60px] h-[60px]"
              >
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp"
                  alt="scooty-logo"
                  className="w-[30px] h-[30px] m-4"
                />
              </div>
              <p className="text-[20px] text-slate-500 m-4">Delivery</p>
            </div>
          </div>
        </Link>

        <Link to="/diningout">
          <div>
            <div className="flex w-[189px] mx-4 cursor-pointer">
              <div
                className="bg-slate-100 rounded-full w-[60px] h-[60px]"
              >
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                  alt="plate&cutlery-logo"
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
              <div
                className="bg-slate-100 rounded-full w-[60px] h-[60px]"
              >
                <img
                  src="https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                  alt="drinks-logo"
                  className="w-[30px] h-[30px] m-4"
                />
              </div>
              <p className="text-[20px] text-slate-500  m-4">Nightlife</p>
            </div>
            <div className="w-[185px] h-[2.5px] bg-red-400 rounded mt-4"></div>
          </div>
        </Link>
      </div>
      <hr/>
    </div>
    <hr />

      <div>
        <CollectionsCarousel items={NightLifeImage}/>
      </div>

      <div className="w-vh flex  pl-[209.6px] bg-white sticky top-0"
        style={{ zIndex: 1000 }}>
      <Button>
          {(isCheckedRating || isCheckedPubsBars) && <FilterBtn filterCount={filterCount} />}
          <Filter />
          <p className="text-slate-500">Filters</p>
        </Button>
        <GoldBtn>Gold</GoldBtn>
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
            isCheckedPubsBars
              ? "bg-red-400 text-slate-100"
              : "fill-current text-slate-500"
          }`}
          onClick={handlePubsBarsFilterToggle}
        >
          {isCheckedPubsBars ? (
            <div className="flex">
              Pubs & Bars
              <Cross />
            </div>
          ) : (
            <div>Pubs & Bars</div>
          )}
        </Button>
      </div>

      <div className="mx-[209.6px]">
        <img src="https://b.zmtcdn.com/data/o2_assets/da94405b04f6ae6bf64a4e2a01b1b5c11686563732.png"
        className=""
        alt="banner" />
      </div>

      <div className="text-[30px] mt-[10px] mb-8 mx-[209.6px]">Trending dining restaurants in your City</div>

      <div>
      <div className="grid gap-x-4 gap-y-3 mx-[209.6px] grid-cols-3">
        {isCheckedRating && isCheckedPubsBars
            ? filteredBothsProducts.map((product) => (
                <DiningOutCard key={product.id} data={product} />
              ))
            : isCheckedRating
            ? filteredRatingProducts.map((product) => (
                <DiningOutCard key={product.id} data={product} />
              ))
            : isCheckedPubsBars
            ? filteredPubsBarsProducts.map((product) => (
                <DiningOutCard key={product.id} data={product} />
              ))
            : DiningOutNightLifeProducts.map((product) => (
                <DiningOutCard key={product.id} data={product} />
              ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default NightLife