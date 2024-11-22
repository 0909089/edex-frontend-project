import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import Store from "./assets/Pages/Store/Store.jsx";
import Mac from "./assets/Pages/Mac/Mac.jsx";
import IPad from "./assets/Pages/iPad/IPad.jsx";
import IPhone from "./assets/Pages/iPhone/IPhone.jsx";
import Watch from "./assets/Pages/Watch/Watch.jsx";
import Vision from "./assets/Pages/Vision/Vision.jsx";
import Airpods from "./assets/Pages/Airpods/Airpods.jsx";
import TvAndHome from "./assets/Pages/TvAndHome/TvAndHome.jsx";
import Entertainment from "./assets/Pages/Entertainment/Entertainment.jsx";
import Accessories from "./assets/Pages/Accessories/Accessories.jsx";
import Support from "./assets/Pages/Support/Support.jsx";
import ShopBag from "./assets/Pages/ShopBag/ShopBag.jsx";
import Home from "./assets/Pages/Home/Home.jsx";
import Development from "./components/Development.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="" element={<App />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Store />} />
          <Route path="mac" element={<Mac />} />
          <Route path="ipad" element={<IPad />} />
          <Route path="iphone" element={<IPhone />} />
          <Route path="watch" element={<Watch />} />
          <Route path="vision" element={<Vision />} />
          <Route path="airpods" element={<Airpods />} />
          <Route path="tv-home" element={<TvAndHome />} />
          <Route path="entertainment" element={<Entertainment />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="support" element={<Support />} />
          <Route path="shop/bag" element={<ShopBag />} />
        </Route>
        <Route path="*" element={<Development />} />
      </Routes>
    </Router>
  </StrictMode>
);
