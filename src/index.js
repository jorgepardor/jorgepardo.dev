import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/common/navbar";
import { Footer } from "./components/common/footer";
import { Waylanders } from "./pages/waylanders";
import { Graphic } from "./pages/graphic";
import { Profile } from "./pages/profile";
import { LinksLanding } from "./pages/links-landing";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="flex flex-col h-screen">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/waylanders" element={<Waylanders />} />
        <Route path="/graphicdesign" element={<Graphic />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/links" element={<LinksLanding />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </div>
);
