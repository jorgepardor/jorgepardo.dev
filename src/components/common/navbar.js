import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Heading } from "./heading";

export const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    // const searchParams = new URLSearchParams(location.search);

    function darkNavBG() {
      var element = document.getElementById("mainNav");
      element.classList.add("waylanders-navbar");
    }
    function undodarkNavBG() {
      var element = document.getElementById("mainNav");
      element.classList.remove("waylanders-navbar");
    }

    function darkFooterBG() {
      var element = document.getElementById("mainFooter");
      element.classList.add("waylanders-navbar");
    }
    function undodarkFooterBG() {
      var element = document.getElementById("mainFooter");
      element.classList.remove("waylanders-navbar");
    }

    if (location.pathname === "/waylanders") {
      darkNavBG();
      darkFooterBG();
    }
    if ((location.pathname = !"/waylanders")) {
      undodarkNavBG();
      undodarkFooterBG();
    }
  }, [location]);

  const { pathname } = useLocation();
  if (location.pathname === "/") return null;

  return (
    <div className="flex justify-around items-center py-3" id="mainNav">
      <a href="/" className="w-1/4 text-4xl text-DarkGR font-Ral text-center">
        <Heading />
      </a>
      <nav className="w-1/4mx-auto cl-effect-18">
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
        {/* <a href="..." className="font-Ral" data-hover="Code">
            Code
          </a> */}
        {/* <a href="..." className="font-Ral" data-hover="Other">
            Other
          </a> */}
        <a
          href="https://flickr.com/photos/jorgeluis/"
          className="font-Ral text-sm"
          data-hover="Photo"
        >
          Photo
        </a>
        <a href="..." className="font-Ral text-sm" data-hover="Profile">
          Profile
        </a>
      </nav>
    </div>
  );
};
