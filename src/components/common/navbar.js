import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Heading } from "./heading";

export const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;

    function darkNavBG() {
      var element = document.getElementById("mainNav");
      console.log(element)
      element.classList.add("waylanders-navbar");
    }
    function undodarkNavBG() {
      var element = document.getElementById("mainNav");
      element.classList.remove("waylanders-navbar");
    }
    function hideNavbar() {
      var element = document.getElementById("mainNav");
      element.classList.add("test");
    }
    function darkFooterBG() {
      var element = document.getElementById("mainFooter");
      element.classList.add("waylanders-navbar");
    }
    function undodarkFooterBG() {
      var element = document.getElementById("mainFooter");
      element.classList.remove("waylanders-navbar");
    }
    function hideFooter() {
      var element = document.getElementById("mainFooter");
      element.classList.add("test");
    }
    console.log(location.pathname)
    if (location.pathname === "/") {
      hideNavbar();
      hideFooter();
    }
    else if (location.pathname === "/waylanders" || location.pathname === "/profile") {
      console.log("tuculo")
      darkNavBG();
      darkFooterBG();
    }
    else {
      undodarkNavBG();
      undodarkFooterBG();
    }
  }, [location]);

  return (
    <div
      className=" block sm:flex justify-around items-center pt-1 pb-14 md:py-3"
      id="mainNav"
    >
      <a
        href="/"
        className="w-full sm:w-1/2 lg:w-1/4 text-4xl text-DarkGR font-Ral text-center"
      >
        <Heading />
      </a>
      <div className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
        <nav className="cl-effect-18">
          <a
            href="/graphicdesign"
            className="font-Ral text-sm"
            data-hover="Graphic"
          >
            Graphic
          </a>
          <a href="/waylanders" className="font-Ral text-sm" data-hover="UX/UI">
            UI/UX
          </a>
          <a
            href="https://flickr.com/photos/jorgeluis/"
            className="font-Ral text-sm"
            data-hover="Photo"
          >
            Photo
          </a>
          <a href="/profile" className="font-Ral text-sm" data-hover="Profile">
            Profile
          </a>
        </nav>
      </div>
    </div>
  );
};
