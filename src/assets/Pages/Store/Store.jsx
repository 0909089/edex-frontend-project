import React from "react";
import Anouncement from "../../../components/Anouncement";
import LatestProducts from "./LatestProducts";

import StoreProducts from "./StoreProducts";

function Store() {
  return <div className="w-100 mx-auto " style={{ backgroundColor: "var(--brand-secondary-color)" }}>
      {/* Anouncement */}

      <Anouncement text={"Starting 11/29, get an Apple Gift Card up to $200 when you buy an eligible product — online and in‑store."} link={"/shop/gifts/shopping-event"} />

      <div className="gradient-background"></div>

      <div className="section-wrapper h-100 mx-auto">
       <StoreProducts></StoreProducts>
       <LatestProducts></LatestProducts>
       </div>
    </div>;
}

export default Store;
