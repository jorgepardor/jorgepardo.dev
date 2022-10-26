import React from "react";
import { Fujiyama } from "../components/graphic/fujiyama";
import { Lexquisite } from "../components/graphic/lexquisite";
import { Gato } from "../components/graphic/gato";
import { Wazzp } from "../components/graphic/wazzp";
import { Venezolana } from "../components/graphic/venezolana";
import { Other } from "../components/graphic/other";

const active_subclass = "btn-graphic-active";
const nonactive_subclass = "btn-graphic";

export const Graphic = () => {
  
  const changeTab = (e) => {
  
    let id = e.currentTarget.getAttribute("data-tabs-target");
  
    document
      .querySelectorAll("#mainContentGraphic > div")
      .forEach((el) => el.classList.add("hidden"));
  
    const selected = document.querySelector(id);
    selected.classList.remove("hidden");
  
    // Desactiva los botones que no están en foco en la navegación por tabs.
  
    document
      .querySelectorAll(".btn-graphic-active")
      .forEach((element) => (element.className = nonactive_subclass));
  
    // Activa los botones al seleccionarse en la navegación por tabs.
  
    document.querySelector(`#${e.currentTarget.id}`).className = active_subclass;
  };



  return (
    <section className="...">
      <div className="bg-white h-max">
        <ul className="flex flex-wrap justify-center -mb-px text-md font-medium text-center text-TW-tx-disable dark:text-gray-400">
          <li className="mr-2 " role="presentation">
            <button
              className={active_subclass}
              id="fujiyama-tab"
              data-tabs-target="#fujiyama"
              type="button"
              aria-controls="fujiyama"
              // aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1662823881/jorgepardo.dev/navigation/nav-fujiyama_gmxcqv.webp"
                alt="navegación: fujiyama"
                width="140px"
                height="100px"
              />
            </button>
          </li>

          <li className="mr-2 " role="presentation">
            <button
              className={nonactive_subclass}
              id="gato-tab"
              data-tabs-target="#gato"
              type="button"
              aria-controls="gato"
              // aria-selected="false"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1662824321/jorgepardo.dev/navigation/nav-gato_kuwn8v.webp"
                alt="navegación: venezolana"
                width="140px"
                height="100px"
              />
            </button>
          </li>

          <li className="mr-2 " role="presentation">
            <button
              className={nonactive_subclass}
              id="lexquisite-tab"
              data-tabs-target="#lexquisite"
              type="button"
              aria-controls="lexquisite"
              // aria-selected="false"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1662824211/jorgepardo.dev/navigation/nav-lexquisite_dr8whn.webp"
                alt="navegación: lexquisite"
                width="140px"
                height="100px"
              />{" "}
            </button>
          </li>

          <li className="mr-2 " role="presentation">
            <button
              className={nonactive_subclass}
              id="wazzp-tab"
              data-tabs-target="#wazzp"
              type="button"
              aria-controls="wazzp"
              // aria-selected="false"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1662824045/jorgepardo.dev/navigation/nav-wazzp_bhndpj.webp"
                alt="navegación: wazzp"
                width="140px"
                height="100px"
              />
            </button>
          </li>

          <li className="mr-2 " role="presentation">
            <button
              className={nonactive_subclass}
              id="venezolana-tab"
              data-tabs-target="#venezolana"
              type="button"
              aria-controls="venezolana"
              // aria-selected="false"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1662824112/jorgepardo.dev/navigation/nav-venezolana_kzkmmo.webp"
                alt="navegación: venezolana"
                width="140px"
                height="100px"
              />
            </button>
          </li>
          <li className="mr-2 " role="presentation">
            <button
              className={nonactive_subclass}
              id="other-tab"
              data-tabs-target="#other"
              type="button"
              aria-controls="other"
              // aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              <img
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1662824511/jorgepardo.dev/navigation/nav-other_wspijp.webp"
                alt="navegación: otros"
                width="140px"
                height="100px"
              />
            </button>
          </li>
        </ul>
      </div>

      <div className="bg-white" id="mainContentGraphic">
        <div
          className=" mx-auto pb-36"
          id="fujiyama"
          role="tabpanel"
          aria-labelledby="fujiyama-tab"
        >
          <Fujiyama />
        </div>
        <div
          className="hidden mx-auto pb-36"
          id="gato"
          role="tabpanel"
          aria-labelledby="gato-tab"
        >
          <Gato />
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
