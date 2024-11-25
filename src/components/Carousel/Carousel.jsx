import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

import "./Carousel.css";
import axios from "axios";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Slide from './Slide';

function Carousel() {
  const [slides, setSlides] = useState(0);
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    axios
      .get("/products/shows/shows.json")
      .then(res => {
        if (res.status == 200) setSlides(res.data);
      })
      .catch(e => {
        if (e.err) console.log("Something wen't wrong!");
      });
  }, []);

  return (
    <div className="carousel-container h-100 bg-light ">
      <div className="slider py-3 w-100 h-100 d-flex justify-content-center align-items-center">


          { (slides.length > 0) ? 
            slides.map(slide => (
               <Slide key={slide.id} slide={slide}></Slide>
              )) : <>No slides</>
              
            } {slides.length > 0 ? 
            <Slide slide={slides[Math.floor(slides.length / 2)]} /> : <>No slides</> }
          { (slides.length > 0) ? 
            slides.map(slide => (
               <Slide key={slide.id} slide={slide}></Slide>
            )) : <>No slides</>
            
          }

        {/* <img
          src={"/products/mac-book.png"}
          alt=""
          className="img-fluid m-2"
          style={{ backgroundColor: "whitesmoke" }}
        /> */}
      </div>
      <div className="slide-indicator h-100 text-center py-2 d-flex justify-content-center">
        {
          slides.length > 0 ? 
          slides.map(slide => (
            <Link key={slide.id} 
            to={`#${slide.id}-${slide.title.toLowerCase().replace(" ", "")}`}
            className="indicator mx-2 " style={{ width: "8px" }} onClick={()=>loadSlide(slide)}>
            <FontAwesomeIcon
              size={'xs'}
              icon={faCircle}
              style={isActive ? { color: "gray" } : { color: "#cccccc" }}
            />
          </Link>
          )) : <></>
        }       
      </div>
    </div>
  );
}

export default Carousel;
