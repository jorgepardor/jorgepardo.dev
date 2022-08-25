import React from "react";
import Slider from "react-slick";

export const Other = () => {
  const settings = {
    dots: false,
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
      <div className="flex items-center justify-center mx-14 py-14">
        <div className="container">
          <div className="row">
            <p className="subtitle-waylanders mb-8">Fujiyama Sushi Bar</p>
            {/* <p className="text-waylanders">
              I'm baby banjo taxidermy you probably haven't heard of them
              chillwave bruh yr, poke 3 wolf moon. Retro aesthetic trust fund
              fanny pack direct trade, literally bitters lyft master cleanse
              celiac godard. Subway tile vegan blue bottle, sartorial literally
              venmo raw denim bespoke small batch man braid meggings typewriter.
              Irony small batch mixtape.
              <br />
              Hella iPhone bruh umami poutine pug. Vinyl cold-pressed everyday
              carry green juice prism, food truck enamel pin gatekeep health
              goth. 90's portland DIY gochujang dreamcatcher tacos organic. Hot
              chicken crucifix yr palo santo tacos waistcoat.
            </p> */}
          </div>

          <Slider {...settings}>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498694/jorgepardo.dev/waylanders/uiux/creator1_result_bvv7mh.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498694/jorgepardo.dev/waylanders/uiux/creator2_result_spconx.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498694/jorgepardo.dev/waylanders/uiux/creator3_result_ah0bun.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498694/jorgepardo.dev/waylanders/uiux/creator4_result_z4kwme.webp"
                alt="Imagen de variedades"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
