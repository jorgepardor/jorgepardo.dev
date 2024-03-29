import React from "react";

export const Footer = () => {
  return (
    <div
      className="p-4 md:flex md:items-center md:justify-between md:p-6"
      id="mainFooter"
    >
      <div className="md:w-1/2 mx-auto text-center text-gray-500 text-sm font-Ral">
        2022. All Rights Reserved.
      </div>
      <ul className="md:w-1/2 m-auto flex justify-center items-center mt-3  text-sm text-Light-gray dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://drive.google.com/drive/folders/1Jc3iOZSoYyCnWS5Aw2IQ8dn2PPRxQZpw?usp=share_link"
            download
            className="font-Ral text-sm mr-4 text-gray-500 hover:text-DarkPk md:mr-6"
            target="_blank"
            rel="noreferrer"
          >
            Currículo
          </a>
        </li>
        <li>
          <a
            href="https://www.behance.net/jorgepardo"
            className="font-Ral text-sm mr-4 text-gray-500 hover:text-DarkPk md:mr-6"
            target="_blank"
            rel="noreferrer"
          >
            Behance
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jorgeluispardo/"
            className="font-Ral text-sm mr-4 text-gray-500 hover:text-DarkPk md:mr-6"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/jorgepardor"
            className="font-Ral text-sm mr-4 text-gray-500 hover:text-DarkPk md:mr-6"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="mailto:hi@jorgepardo.dev"
            className="font-Ral text-sm mr-4 text-gray-500 hover:text-DarkPk md:mr-6"
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
};
