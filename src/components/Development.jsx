import React from "react";
import { useNavigate } from "react-router-dom";
import appleLogo from '../assets/images/apple-logo.png';

import "./Development.css";
import Button from "./Button";
import Header from "./Header";
import Footer from "./Footer/Footer";

function Development() {

  const navigate = useNavigate();
  return (
   <>
    <Header></Header>
    <div className="development-page d-flex flex-column justify-content-center align-items-center">
      <img src={appleLogo} alt="" className="apple-logo img-fluid"/>
      <h2 className="h1 fw-semibold mt-5">This page is under the development</h2>

      <Button text='Go back' bgColor={'black'} fgColor={'white'} onClick={()=> navigate(-1)}></Button>

    </div>
    <Footer></Footer>
    </>
  );
}

export default Development;
