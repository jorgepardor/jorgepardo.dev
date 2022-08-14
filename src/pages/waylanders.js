import React from "react";
import { CharCreator } from "../components/waylanders/charCreator";
import { InGameMenu } from "../components/waylanders/ingameMenu";
import { HudCombat } from "../components/waylanders/combatHUD";
import { UxPreviousMain } from "../components/waylanders/otherUxProto";
import { UxPreviousIngame } from "../components/waylanders/otherUxProtoIngame";
import { GraphicElements } from "../components/waylanders/graphic";

const active_class = "btn-waylanders";
const deactive_class = "btn-waylanders";

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

export const Waylanders = () => {
  return (
    <section className="bg-TW-bg-dark">
      <div className="bg-[url('https://res.cloudinary.com/jorgepardor/image/upload/v1660418933/jorgepardo.dev/waylanders/TheWaylanders_LiveStreaming_Banner_iuqvad.png')] bg-no-repeat bg-center bg-cover  border-b-4 border-TW-tx-disable dark:border-TW-tx-disable">
        <div className="flex items-center py-24">
          <img
            className="w-4/6 md:w-2/6 m-auto"
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1659882606/jorgepardo.dev/waylanders/logo_waylanders_White_cejixe.webp"
            alt="The Waylanders logo"
          />
        </div>
      </div>

      <div className="...">
        <ul className="flex flex-wrap justify-center -mb-px text-md font-medium text-center text-TW-tx-disable dark:text-gray-400">
          <li className="mr-2 " role="presentation">
            <button
              className={active_class}
              id="uxui-tab"
              data-tabs-target="#uxui"
              type="button"
              aria-controls="uxui"
              aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              {" "}
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              UX-UI
            </button>
          </li>

          <li className="mr-2 " role="presentation">
            <button
              className={active_class}
              id="branding-tab"
              data-tabs-target="#branding"
              type="button"
              aria-controls="branding"
              aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              {" "}
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              Branding
            </button>
          </li>

          <li className="mr-2 " role="presentation">
            <button
              className={active_class}
              id="graphic-tab"
              data-tabs-target="#graphic"
              type="button"
              aria-controls="graphic"
              aria-selected="true"
              onClick={(e) => {
                changeTab(e);
              }}
            >
              {" "}
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
              Graphic Design
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
              {" "}
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Other
            </button>
          </li>
        </ul>
      </div>

      <div className="container mx-auto h-screen" id="mainContent">
        {/* Contenido de la sección de gestión de usuarios */}

        <div
          className="h-full"
          id="uxui"
          role="tabpanel"
          aria-labelledby="uxui-tab"
        >
          <CharCreator />
          <InGameMenu />
          <HudCombat />
        </div>

        <div
          className="hidden bg-DarkGR"
          id="branding"
          role="tabpanel"
          aria-labelledby="branding-tab"
        >
          <h2>Aqui ira branding</h2>
        </div>

        <div
          className="hidden"
          id="graphic"
          role="tabpanel"
          aria-labelledby="graphic-tab"
        >
          <GraphicElements />
        </div>

        <div
          className="hidden"
          id="other"
          role="tabpanel"
          aria-labelledby="other-tab"
        >
        <div>
          <p className="subtitle-waylanders text-center mt-16 mb-8">Ingame menu</p>
        </div>
        <p className="text-waylanders text-center">
          I'm baby banjo taxidermy you probably haven't heard of them chillwave
          bruh yr, poke 3 wolf moon. Retro aesthetic trust fund fanny pack
          direct trade, literally bitters lyft master cleanse celiac godard.
          Subway tile vegan blue bottle, sartorial literally venmo raw denim
          bespoke small batch man braid meggings typewriter. Irony small batch
          mixtape.
          <br />
          Hella iPhone bruh umami poutine pug. Vinyl cold-pressed everyday carry
          green juice prism, food truck enamel pin gatekeep health goth. 90's
          portland DIY gochujang dreamcatcher tacos organic. Hot chicken
          crucifix yr palo santo tacos waistcoat.
        </p>
          <UxPreviousMain />
          <UxPreviousIngame />
        </div>
      </div>

      {/* UX Carousel */}
      {/* 
        <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1660229617/jorgepardo.dev/waylanders/gifs/PuntaFlechaCarga_ozqsl4.gif" />
        <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1660410766/jorgepardo.dev/waylanders/kick/KICK_HEAD_main_features_qicxfm.webp" /> */}
    </section>
  );
};
