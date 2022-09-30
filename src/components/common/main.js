import React from "react";
import Slider from "react-slick";
import { Footer } from "./footer";
import { Heading } from "./heading";

export const Main = () => {
  const mainCarousel = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: true,
  };

  return (
    <section className=" bg-TW-bg-dark">
      <header className="header-container">
        <div className="text-center">
          {/* <h1 className="main-title font-Ral ">
            JORGEPARDO.DEV
          </h1> */}

          <Heading />

          <nav className="flex flex-wrap mt-5 text-center gap-1 cl-effect-18">
            <a
              href="/graphicdesign"
              className="font-Ral text-sm sm:text-l"
              data-hover="Graphic"
            >
              Graphic
            </a>
            <a href="/waylanders" className="font-Ral text-sm sm:text-l" data-hover="Graphic">
              UX/UI
            </a>
            <a href="/graphicdesign" className="font-Ral text-sm sm:text-l" data-hover="Graphic">
              Profile
            </a>
            <a
              href="https://flickr.com/photos/jorgeluis/"
              className="font-Ral text-sm sm:text-l"
              data-hover="Photo"
            >
              Photo
            </a>
          </nav>
        </div>
      </header>

      <div className="gradient-bg"></div>

      <div className="main-footer">
        <ul className="md:w-1/2 m-auto flex justify-center items-center mt-3  text-sm text-Light-gray dark:text-gray-400 sm:mt-0">
         
          <li>
            <a
              href="/assets/Elizabeth Lara Gonzalez.pdf"
              download
              className="font-Ral text-sm  mr-4 text-gray-500 hover:text-DarkPk md:mr-6"
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
              href="mailto:hi@jorgepardo.dev"
              className="font-Ral text-sm text-gray-500 hover:text-DarkPk"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>

      <Slider {...mainCarousel} className="carousel">
        <div className="...">
          <img
            className="bg-image"
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1663358017/jorgepardo.dev/hero/2347341057_bb3d81cb7e_o_jhifmr.webp"
            alt="Imagen de variedades"
          />
        </div>
        <div className="...">
          <img
            className="bg-image"
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1663357960/jorgepardo.dev/hero/5106809456_cc3d6fa787_o_wbfpmf.jpg"
            alt="Imagen de variedades"
          />
        </div>
        <div className="...">
          <img
            className="bg-image"
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498695/jorgepardo.dev/waylanders/uiux/ingameabilities_result_ey3xzd.webp"
            alt="Imagen de variedades"
          />
        </div>
        <div className="...">
          <img
            className="bg-image"
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1663357961/jorgepardo.dev/hero/4535947260_32b748bfdd_o_cepuxm.jpg"
            alt="Imagen de variedades"
          />
        </div>
        <div className="...">
          <img
            className="bg-image"
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1663357960/jorgepardo.dev/hero/2937250416_317367315e_o_jadhzj.jpg"
            alt="Imagen de variedades"
          />
        </div>
        <div className="...">
          <img
            className="bg-image"
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498697/jorgepardo.dev/waylanders/uiux/menumapabig_hgvfvd.webp"
            alt="Imagen de variedades"
          />
        </div>
        <div className="...">
          <img
            className="bg-image"
            src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/c01f90110586413.5ff1c85232429_result_fetoaf.webp"
            alt="Imagen de variedades"
          />
        </div>
      </Slider>
    </section>
  );
};
