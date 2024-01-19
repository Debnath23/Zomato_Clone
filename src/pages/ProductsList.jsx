import React from "react";
import Card from "../components/Card/Card";
import Footer from "../components/Main/Footer";
import Products from "../components/Products/Products";

function ProductsList() {
  return (
    <div>
      <div className="grid gap-x-4 gap-y-3 px-[30px] grid-cols-3">
      {
        Products.map((item) => (
          <Card key={item.id} data={item}/>
        ))
      }
      </div>

      <Footer />
    </div>
  );
}

export default ProductsList;
