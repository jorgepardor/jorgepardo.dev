import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
  const changeTab = (e) => {
    let id = e.target.getAttribute("data-tabs-target");

    document
      .querySelectorAll("#mainContent > div")
      .forEach((el) => el.classList.add("hidden"));

    document.querySelector(id).classList.remove("hidden");

    // Desactiva los botones que no están en foco en la navegación por tabs.

    document
      .querySelectorAll(".tab")
      .forEach((element) => (element.className = deactive_class));

    // Activa los botones al activarse en la navegación por tabs.

    document.querySelector(`#${e.target.id}`).className = active_class;
  };

  const active_class = "cl-effect-18";
  const deactive_class = "cl-effect-18";

  const [menuToggle, setMenuToggle] = useState(false);


  // const darkNav = document.getElementById('mainNav')
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/") return null;
  // else if (pathname === "/thewaylanders") 

  return (
    <div className="flex justify-around items-center py-5 bg-TW-bg-dark" id="mainNav">
      <a href="/" className="w-1/4 text-4xl text-DarkGR font-Ral text-center">
        JORGEPARDO.DEV
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
        <a href="..." className="font-Ral text-sm" data-hover="Profile">
          Profile
        </a>
      </nav>
    </div>
  );
};
