import React from "react";

import Header from "./components/Header";
import AppCss from "./App.module.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import { AppContextProvider } from "./AppContext";

function App() {
  return (
    <AppContextProvider>
      <div className="w-100">
        <Header />
        <div className="h-100" style={{ marginTop: "40px", height: "100%", minHeight:"50vh"}}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </AppContextProvider>
  );
}

export default App;
