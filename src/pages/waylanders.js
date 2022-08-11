import React from "react";
import { CharCreator } from "../components/waylanders/charCreator";
import { InGameMenu } from "../components/waylanders/ingameMenu";
import { HudCombat } from "../components/waylanders/combatHUD";

export const Waylanders = () => {
  return (
    <section className="bg-TW-bg-dark">
      <div className="flex items-center pt-16 pb-4">
        <img
          className="w-1/6 m-auto"
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1659882606/jorgepardo.dev/waylanders/logo_waylanders_White_cejixe.webp"
          alt="The Waylanders logo"
        />
      </div>

      <div className="border-b border-TW-tx-disable dark:border-TW-tx-disable">
        <ul className="flex flex-wrap justify-center -mb-px text-md font-medium text-center text-TW-tx-disable dark:text-gray-400">
          <li className="mr-2">
            <a href="#" className="btn-waylanders">
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5 icon-waylanders"
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
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="btn-waylanders" aria-current="page">
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              Branding
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="btn-waylanders">
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
              Graphic Design
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="btn-waylanders">
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
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
            </a>
          </li>
        </ul>
      </div>

      {/* UX Carousel */}
      <div className="container mx-auto h-screen">
        {/* <CharCreator />
        <InGameMenu />
        <HudCombat /> */}
        <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1660229617/jorgepardo.dev/waylanders/gifs/PuntaFlechaCarga_ozqsl4.gif"/>
      </div>
    </section>
  );
};
