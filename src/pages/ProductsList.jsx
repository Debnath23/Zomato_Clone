import React from "react";
import Card from "../components/Card/Card";
import Footer from "../components/Main/Footer";
import { Products } from "../components/Products/Products";
import SearchBar from "../components/Main/SearchBar";
import Category from "../components/Main/Category";
import Filter from "../components/Main/Filter";
import Carousel from "../components/Main/Carousel";
import CarouselBrand from "../components/Main/CarouselBrand";
import { CarouselItems } from "../components/Products/Products";
import { Brands } from "../components/Products/Products";

function ProductsList() {
  return (
    <div>
      <SearchBar />
      <Category />
      <Filter />
      <Carousel items={CarouselItems} />
      <CarouselBrand items={Brands} />
      <div>
        <h1 className="w-[1100px] h-[36px] text-[30px] my-[20px] mx-[52px]">Best Food In Your City</h1>
        <div className="grid gap-x-4 gap-y-3 px-[30px] grid-cols-3">
          {Products.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductsList;
