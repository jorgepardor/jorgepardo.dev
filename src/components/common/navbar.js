import React, { useState } from "react";
import { Waylanders } from "../../pages/waylanders";

const active_class = "cl-effect-18";
const deactive_class = "cl-effect-18";

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

export const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="flex justify-center items-center pt-5">
      <h1 className="w-full text-xl text-DarkGR font-Ral text-center">
        JORGEPARDO.DEV
      </h1>

      <section className="w-full">
        <nav className="mx-auto cl-effect-18">
          <a href="/graphicdesign" className="font-Ral text-sm" data-hover="Graphic">
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
      </section>
    </div>
  );
};
