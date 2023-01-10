import React from "react";
import LinkedInImg from "./../../icons/linkedin-in.svg";
import BehanceImg from "./../../icons/behance.svg";
import EmailImg from "./../../icons/email.svg";
import WebsiteImg from "./../../icons/website.svg";
import TwitterImg from "./../../icons/twitter.svg";
import FlickrImg from "./../../icons/flickr.svg";
import InstagramImg from "./../../icons/instagram.svg";
import TelegramImg from "./../../icons/telegram.svg";

const buttons = [
  { name: "Jorgepardo.dev", url: "https://jorgepardo.dev", icon: WebsiteImg },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jorgeluispardo/",
    icon: LinkedInImg,
  },
  {
    name: "Behance",
    url: "https://www.behance.net/jorgeluispardo",
    icon: BehanceImg,
  },
  { name: "Email", url: "mailto:hi@jorgepardo.dev", icon: EmailImg },
  { name: "Twitter", url: "https://twitter.com/jorgepardor", icon: TwitterImg },
  {
    name: "Flickr",
    url: "https://flickr.com/photos/jorgeluis/",
    icon: FlickrImg,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/jorgepardo/",
    icon: InstagramImg,
  },
  { name: "Telegram", url: "https://t.me/jorgeluispardo", icon: TelegramImg },
];

export const Links = () => {
  return (
    <div className=" bg-TW-bg-dark pt-6">
      {buttons.map((button, index) => {
        return (
          <div key={index} className="mx-auto w-4/5 md:w-1/4">
            <a
              href={button.url}
              type="button"
              className=" w-full text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100  justify-center font-Ral font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-TW-bg-dark dark:border-gray-700 dark:text-white dark:hover:bg-TW-bg-dark transition-all ease-in-out duration-500 dark:hover:text-DarkPk mr-2 mb-2 "
              target={"_blank"}
              rel={"noreferrer"}
            >
              <img
                className="link-icon"
                src={button.icon}
                alt="Iconos de redes sociales"
              />
              <p>{button.name}</p>
            </a>
          </div>
        );
      })}
    </div>
  );
};
