import React, { useEffect, useState } from "react";

import ProductHeadingGradient from "../../../components/ProductHeadingGradient";

import productAvatar from "../../../assets/images/apple-logo.png";

import "./Store.css";
import HelpSection from "../../../components/HelpSection";
import ProductCard from "../../../components/ProductCard";
import { fetchData } from "../../controllers/utilities";
import Loading from "../../../components/Loading";

function StoreProducts() {
  const [products, setProducts] = useState(0);

  useEffect(() => {
    fetchData("/products/electronic.category.json", setProducts);
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <ProductHeadingGradient
          titleOne={"Store."}
          titleTwo={"Gift magic this holiday."}
        />
        <div className="help-center">
          <HelpSection />
        </div>
      </div>
      <section className="product-section w-100 my-3 py-5 d-flex justify-content-around align-items-center"> 
        {Object.entries(products).map(([cat, items]) =>
          items.map(item =>
            <ProductCard
              key={item.id}
              id={item.id}
              productAvatar={item.icon}
              productTitle={item.title}
              route={item.route}
            />
          )
        )}
      </section>
    </div>
  );
}

export default StoreProducts;
