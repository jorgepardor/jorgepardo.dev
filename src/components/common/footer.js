import React from "react";

export const Footer = () => {
  return (
    <footer className="p-4 md:flex md:items-center md:justify-between md:p-6 ">
      <div className="md:w-1/2 mx-auto text-center text-sm font-Ral">
        2022. All Rights Reserved.
      </div>
      <ul className="md:w-1/2 m-auto flex justify-center items-center mt-3  text-sm text-Light-gray dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="/assets/Elizabeth Lara Gonzalez.pdf"
            download
            className="font-Ral text-sm  mr-4 hover:text-Yellow-custom md:mr-6"
            target="_blank"
            rel="noreferrer"
          >
            Currículo
          </a>
        </li>
        <li>
          <a
            href="https://www.behance.net/jorgepardo"
            className="font-Ral text-sm mr-4 hover:text-Yellow-custom md:mr-6"
            target="_blank"
            rel="noreferrer"
          >
            Behance
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jorgeluispardo/"
            className="font-Ral text-sm mr-4 hover:text-Yellow-custom md:mr-6"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="/contacto" className="font-Ral text-sm hover:text-Yellow-custom">
            Contacto
          </a>
        </li>
      </ul>
    </footer>
  );
};
