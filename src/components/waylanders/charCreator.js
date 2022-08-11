import React from "react";
import Slider from "react-slick";

export const CharCreator = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: true,
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mx-14 mt-14">
        <div className="w-4/6 mr-6">
          <div className="container">
            <Slider {...settings}>
              <div className="w-80 mx-auto">
                <img
                  className="mx-auto"
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895469/jorgepardo.dev/waylanders/characterdesign_1_deqgql.webp"
                  alt="Imagen de variedades"
                />
              </div>
              <div>
                <img
                  className="mx-auto"
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895471/jorgepardo.dev/waylanders/characterdesign_2_sac3u4.webp"
                  alt="Imagen de variedades"
                />
              </div>
            </Slider>
          </div>
        </div>
        <div className="w-2/6 ml-6">
          <div>
            <p className="subtitle-waylanders mb-8">Character creator</p>
          </div>
          <p className="text-waylanders">
            I'm baby banjo taxidermy you probably haven't heard of them
            chillwave bruh yr, poke 3 wolf moon. Retro aesthetic trust fund
            fanny pack direct trade, literally bitters lyft master cleanse
            celiac godard. Subway tile vegan blue bottle, sartorial literally
            venmo raw denim bespoke small batch man braid meggings typewriter.
            Irony small batch mixtape.
            <br />
            Hella iPhone bruh umami poutine pug. Vinyl cold-pressed everyday
            carry green juice prism, food truck enamel pin gatekeep health goth.
            90's portland DIY gochujang dreamcatcher tacos organic. Hot chicken
            crucifix yr palo santo tacos waistcoat.
          </p>
        </div>
      </div>
    </div>
  );
};
