import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import AppCss from "./App.module.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import { AppContextProvider } from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="w-100">
        {/* {window.screen.width <= 768 ? <></> : <Header />}
        <div
          className="h-100"
          style={{ marginTop: "40px", height: "100%", minHeight: "50vh" }}
        >
          <Outlet />
        </div>
             {window.screen.width <= 768 ? <></> : <Footer />} */}

          {window.screen.width > 1366 ?  <>
            <Header />
          <div className="h-100" style={{minHeight:'75vh', paddingTop:'40px'}}>
            <Outlet />
          </div>
          <Footer />
          </> : 
            <div className="d-flex justify-content-center align-items-center bg-danger w-100 h-100" style={{minHeight:'100vh'}}>
              <h2 className="h2 text-center fw-bold text-uppercase text-light">Please view the site in larger devices &gt;=1366px</h2>
            </div>
          }

       
      </div>
    </AppContextProvider>
  );
}

export default App;
