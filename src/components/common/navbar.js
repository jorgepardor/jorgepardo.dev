import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Heading } from "../../icons/heading";

export const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    // eslint-disable-next-line 
    const currentPath = location.pathname;

    function darkNavBG() {
      var element = document.getElementById("mainNav");
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
    if (location.pathname === "/" || location.pathname === "/links") {
      hideNavbar();
      hideFooter();
    } else if (
      location.pathname === "/waylanders" ||
      location.pathname === "/profile"
    ) {
      darkNavBG();
      darkFooterBG();
    } else {
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
          <a href="/profile" className="font-Ral text-sm" data-hover="Profile">
            Profile
          </a>
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
            target={"_blank"}
            rel={"noreferrer"}
          >
            Photo
          </a>
        </nav>
      </div>
    </div>
  );
};
