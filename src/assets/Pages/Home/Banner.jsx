import React from "react";
import bannerImage from "../../images/banner-image.png";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate('/store')}
      className={`banner d-flex justify-content-center align-items-center pb-5`}
      style={{cursor:'pointer'}}
    >
      <div
        className={` banner-content text-center`}
        style={{ width: "fit-content" }}
      >
        <div className="logo-container">
          <img
            src={bannerImage}
            alt=""
            className="img-fluid"
            style={{
              maxWidth: "400px"
            }}
          />
        </div>
        <h2
          className="h1 title fw-bold"
          style={{
            fontSize: "3.4rem"
          }}
        >
          Gift magic
        </h2>
        <h4 className="h3 sub-title fw-normal mx-4">
          Make their holiday wish come true
        </h4>
        <Button
          text="Shop gifts"
          bgColor="var(--primary-btn-bg)"
          fgColor="var(--brand-primary-color)"
          onClick={() => navigate("/store")}
        />
      </div>
    </div>
  );
}

export default Banner;
