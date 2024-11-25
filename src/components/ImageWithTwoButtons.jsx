import React, { useEffect, useState } from "react";
import Button from "./Button";

function ImageWithTwoButtons({ item }) {
  const mainTitle = { fontSize: "1.2rem" };
  const productTitle = { fontSize: "1.5rem" };
  const productTitle2 = { fontSize: "1.8rem" };

  return (
    <div className="w-100 h-100">
      <div
        className={`bg-image w-100 text-light h-100 py-5 text-light px-5
      d-flex justify-content-${item.contentAlignment
        ? item.contentAlignment
        : "center"} align-items-center flex-column text-uppercase`}
        style={{
          minHeight: "70vh",
          backgroundImage: `url("${item.src}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100%"
        }}
      >
        <h4
          className="main-title text-capitalize fw-semibold"
          style={mainTitle}
        >
          {item.type == "video" ? item.mainTitle : ""}
        </h4>
        <h3 className="h3 product-title" style={productTitle}>
          {item.productTitle}
        </h3>
        <h1 className="h1 product-subtitle" style={productTitle2}>
          {item.productSubtitle}
        </h1>
        <p className="product-description text-lowercase h5 text-wrap text-center">
          {item.productDescription.length > 75
            ? item.productDescription.substring(
                0,
                window.screen.width < 998 ? 35 : 75
              ) + "..."
            : item.productDescription}
        </p>

        <div className="buttons">
          {item.type == "video"
            ? <div>
                <Button
                  text="Watch trailer"
                  bgColor="white"
                  fgColor="black"
                  styles={{ marginRight: "1rem" }}
                />
                <Button
                  text="Watch now"
                  bgColor="var(--primary-btn-bg)"
                  fgColor="var(--brand-primary-color)"
                />
              </div>
            : <div>
                <Button
                  text="Learn more"
                  bgColor="var(--primary-btn-bg)"
                  fgColor="var(--brand-primary-color)"
                  styles={{ marginRight: "1rem" }}
                />

                <Button
                  text="Buy"
                  bgColor="transparent"
                  fgColor="var(--primary-btn-color"
                  styles={{ border: "2px solid var(--brand-primary-color)" }}
                />
              </div>}
        </div>
      </div>
    </div>
  );
}

export default ImageWithTwoButtons;
