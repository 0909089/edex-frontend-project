import React from "react";

import Button from "../Button";

function MarquedItem({ item }) {
  return (
    <div className="item me-3 position-relative bg-dark">
      <div
        className="bg-image"
        style={{
          backgroundImage: `url(${item.imageSrc})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "417px",
          height: "236px"
        }}
      >
        <div className="content w-100 h-100">
          <div
            className="hover-state w-100 h-100 p-0 m-0 d-flex justify-content-center align-items-center"
            style={{ backgroundColor: "#00000050" }}
          >
            <Button
              text={
                item.type.toLowerCase() == "music" ? "Listen now" : "Watch now"
              }
              bgColor={"white"}
              fgColor={"black"}
            />
          </div>
          <h4 className="h6 title text-light">
            {item.title}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default MarquedItem;
