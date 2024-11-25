import React from "react";

import Button from "../Button";

function Slide({ slide }) {
  return (
    <div
      id={`${slide.id}-${slide.title.toLowerCase().replace(" ", "")}`}
      className="slide position-relative"
      key={slide.id}
    >
      <img src={slide.imageSrc} alt="no-image" />

      <div className="content d-flex justify-content-start align-items-center text-light">
        <Button text={"Stream now"} bgColor={"white"} fgColor={"black"} />
        <h4 className="h6 fw-bold ms-4 me-2">
          {slide.category}
        </h4>
        <span
          className="mx-1"
          style={{
            width: "8px",
            height: "8px",
            background: "white",
            borderRadius: "50%"
          }}
        />
        <div className="ms-2 description h6">
          {slide.subtitle}
        </div>
      </div>
    </div>
  );
}

export default Slide;
