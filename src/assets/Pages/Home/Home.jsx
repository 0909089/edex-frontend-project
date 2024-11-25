import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import "./Home.css";

import ImageWithTwoButons from "../../../components/ImageWithTwoButtons";
import axios from "axios";
import { appContext } from "../../../AppContext";
import Loading from "../../../components/Loading";
import Carousel from "../../../components/Carousel/Carousel";
import Marqued from "../../../components/Carousel/Marqued";

function Home() {
  const context = useContext(appContext);

  const [productsData, setProductsData] = useState(null);

  useEffect(e => {
    axios
      .get("products/products.json")
      .then(res => {
        if (res.status == 200) {
          setProductsData(res.data);
        } else console.log("Something went wrong!");
      })
      .catch(e => {
        if (e) console.log(e.message);
      });
  }, []);

  return (
    <div
      className={`home flex-column h-100`}
      style={{ backgroundColor: "var(--brand-primary-color)" }}
    >
      <div className="banner">
        <Banner />
      </div>

      {productsData
        ? productsData.map(product => {
            if (product.id <= 3)
              return <ImageWithTwoButons key={product.id} item={product} />;
          })
        : <Loading />}
      {productsData
        ? <div>
            <div className="d-flex justify-content-start align-items-center">
              <div className="row">
                {productsData.map(product => {
                  if (product.id >= 4 && product.id <= 9) {
                    return (
                      <div className={`col-12 col-lg-6 g-0`}>
                        <ImageWithTwoButons key={product.id} item={product} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        : <Loading />}

      {/* Carousel slider for showing products */}

      <Carousel />

      <Marqued />
    </div>
  );
}

export default Home;
