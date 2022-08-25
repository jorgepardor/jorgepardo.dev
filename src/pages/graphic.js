import React from "react";
import { Fujiyama } from "../components/graphic/fujiyama";
import { Lexquisite } from "../components/graphic/lexquisite";
import { Gato } from "../components/graphic/gato";
import { Wazzp } from "../components/graphic/wazzp";
import { Venezolana } from "../components/graphic/venezolana";
import { Other } from "../components/graphic/other";

const active_class = "btn-graphic";
const deactive_class = "btn-graphic";

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

export const Graphic = () => {
  return (
    <section className="...">
      <div className="bg-white h-max">
        <ul className="flex flex-wrap justify-center -mb-px text-md font-medium text-center text-TW-tx-disable dark:text-gray-400">
          <li className="mr-2 " role="presentation">
            <button
              className={active_class}
              id="fujiyama-tab"
              data-tabs-target="#fujiyama"
              type="button"
              aria-controls="fujiyama"
              aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img src="https://via.placeholder.com/140x100/0000FF/808080?text=fujiyama" />
            </button>
          </li>

          <li className="mr-2 " role="presentation">
            <button
              className={active_class}
              id="gato-tab"
              data-tabs-target="#gato"
              type="button"
              aria-controls="gato"
              aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img src="https://via.placeholder.com/140x100/0000FF/808080?text=gato" />
            </button>
          </li>

          <li className="mr-2 " role="presentation">
            <button
              className={active_class}
              id="lexquisite-tab"
              data-tabs-target="#lexquisite"
              type="button"
              aria-controls="lexquisite"
              aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img src="https://via.placeholder.com/140x100/0000FF/808080?text=lexquisite" />
            </button>
          </li>

          <li className="mr-2 " role="presentation">
            <button
              className={active_class}
              id="wazzp-tab"
              data-tabs-target="#wazzp"
              type="button"
              aria-controls="wazzp"
              aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img src="https://via.placeholder.com/140x100/0000FF/808080?text=wazzp" />
            </button>
          </li>

          <li className="mr-2 " role="presentation">
            <button
              className={active_class}
              id="venezolana-tab"
              data-tabs-target="#venezolana"
              type="button"
              aria-controls="venezolana"
              aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img src="https://via.placeholder.com/140x100/0000FF/808080?text=venezolana" />
            </button>
          </li>
          <li className="mr-2 " role="presentation">
            <button
              className={active_class}
              id="other-tab"
              data-tabs-target="#other"
              type="button"
              aria-controls="other"
              aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img src="https://via.placeholder.com/140x100/0000FF/808080?text=other" />
            </button>
          </li>
        </ul>
      </div>

      <div className="bg-white" id="mainContent">
        {/* Contenido de la sección de gestión de usuarios */}
        <div
          className="hidden mx-auto pb-36"
          id="gato"
          role="tabpanel"
          aria-labelledby="gato-tab"
        >
          <Gato />
        </div>
        <div
          className="container mx-auto pb-36"
          id="fujiyama"
          role="tabpanel"
          aria-labelledby="fujiyama-tab"
        >
          <Fujiyama />
        </div>

        <div
          className="hidden mx-auto pb-36"
          id="lexquisite"
          role="tabpanel"
          aria-labelledby="lexquisite-tab"
        >
          <Lexquisite />
        </div>

        <div
          className="hidden mx-auto pb-36"
          id="wazzp"
          role="tabpanel"
          aria-labelledby="wazzp-tab"
        >
          <Wazzp />
        </div>
        <div
          className="hidden mx-auto pb-36"
          id="venezolana"
          role="tabpanel"
          aria-labelledby="venezolana-tab"
        >
          <Venezolana />
        </div>
        <div
          className="hidden mx-auto pb-36"
          id="other"
          role="tabpanel"
          aria-labelledby="other-tab"
        >
          <Other />
        </div>
      </div>
    </section>
  );
};
