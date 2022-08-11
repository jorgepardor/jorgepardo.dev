import React from "react";
import Slider from "react-slick";

export const HudCombat = () => {
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
    <div className="flex items-center justify-center mx-14 mt-14">
      <div className="w-4/6 mr-6">
        <div className="container">
          <Slider {...settings}>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660215595/jorgepardo.dev/waylanders/hudwalk_nmhkk1.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660215595/jorgepardo.dev/waylanders/hudwalking_h4dw1l.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660215595/jorgepardo.dev/waylanders/hudfighting2_vpjz6t.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660215596/jorgepardo.dev/waylanders/hudfighting_jh74tp.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660215595/jorgepardo.dev/waylanders/hudcrownest_oyahuh.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660215595/jorgepardo.dev/waylanders/hudloot_ea6zh7.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660215594/jorgepardo.dev/waylanders/menuloading_l7xhtq.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660215595/jorgepardo.dev/waylanders/hudstore_l4wnck.webp"
                alt="Imagen de variedades"
              />
            </div>
          </Slider>
        </div>
      </div>
      <div className="w-2/6 ml-6">
        <div>
          <p className="subtitle-waylanders mb-8">Combat / Ingame </p>
        </div>
        <p className="text-waylanders">
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
      </div>
    </div>
  );
};
