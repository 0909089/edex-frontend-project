import React, { useEffect, useState } from "react";

import { fetchData } from "../../assets/controllers/utilities";
import "./Marqued.css";

import testImage from "/products/peakpx.jpg";

import MarquedItem from "./MarquedItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

function Marqued() {
  const [items, setItems] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(10);

  const title = "Sample title";
  const type = "music";

  useEffect(() => {
    fetchData("/products/shows/shows.json", setItems);
  }, []);

  return <>
      <div className="marqued-slider container-fluid m-0 px-0 p-3 bg-transparent d-flex justify-content-start align-items-center" style={{ minHeight: "20rem", maxWidth: "100vw" }}>
        {items.length > 0 ? items.map(item =>
              <MarquedItem key={item.id} item={item} />
            ) : <div className="w-100 fw-bold text-uppercase text-center">
              Unable to load the items
            </div>}
        {items.length > 0 ? items.map(item =>
              <MarquedItem key={item.id} item={item} />
            ) : <div className="w-100 fw-bold text-uppercase text-center">
              Unable to load the items
            </div>}
      </div>
    </>;
}

export default Marqued;
