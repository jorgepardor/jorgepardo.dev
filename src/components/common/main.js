import React from "react";
import Slider from "react-slick";


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
    <section className="bg-DarkBG">
      <header className="absolute z-20 px-4 pl-40 max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-5xl text-DarkGR font-Ral text-center sm:text-5xl">
            JORGEPARDO.DEV
          </h1>

          <nav className="flex flex-wrap mt-8 text-center gap-1 cl-effect-18">
            <a
              href="/graphicdesign"
              className="font-Ral text-xl"
              data-hover="Graphic"
            >
              Graphic
            </a>
            <a href="/waylanders" className="font-Ral" data-hover="Graphic">
              UX/UI
            </a>
            <a href="/graphicdesign" className="font-Ral" data-hover="Graphic">
              Profile
            </a>
            <a href="/graphicdesign" className="font-Ral" data-hover="Graphic">
              Photo
            </a>
          </nav>
        </div>
      </header>


      <div className="hidden z-10 sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-TW-bg-dark sm:to-transparent"></div>
      <div className="hidden z-10 sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-TW-bg-dark sm:to-transparent"></div>
   
      <Slider {...mainCarousel}>
            <div className="w-100 h-screen mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1663358017/jorgepardo.dev/hero/2347341057_bb3d81cb7e_o_jhifmr.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-100 h-screen mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1663357960/jorgepardo.dev/hero/5106809456_cc3d6fa787_o_wbfpmf.jpg"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-100 h-screen mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1663357961/jorgepardo.dev/hero/4535947260_32b748bfdd_o_cepuxm.jpg"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-100 h-screen mx-auto">
              <img
                className="..."
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1663357960/jorgepardo.dev/hero/2937250416_317367315e_o_jadhzj.jpg"
                alt="Imagen de variedades"
              />
            </div>
          </Slider>
    </section>
  );
};
