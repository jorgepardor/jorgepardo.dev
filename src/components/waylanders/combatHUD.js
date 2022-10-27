import React from "react";
import Slider from "react-slick";

export const HudCombat = () => {
  const waylandersHUDCarousel = {
    responsive: [
      {
        breakpoint: 9999,
        settings: {
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
        },
      },
      {
        breakpoint: 680,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          speed: 1500,
          autoplaySpeed: 3000,
          autoplay: true,
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: true,
          pauseOnHover: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto pt-8 md:pt-0">
      <div className="flex items-center justify-center md:mx-14 md:py-14">
        <div className="container">
          <div className="row">
            <p className="subtitle-waylanders mb-2 md:mb-8">HUD de combate</p>
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

          <Slider {...waylandersHUDCarousel}>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660590441/jorgepardo.dev/waylanders/uiux/MainMenu_result_igtykw.webp"
                alt="Imagen del HUD de The Waylanders"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498696/jorgepardo.dev/waylanders/uiux/hudmain_result_ya5sl4.webp"
                alt="Imagen del HUD de The Waylanders"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498696/jorgepardo.dev/waylanders/uiux/hudtutorial_result_e70eyn.webp"
                alt="Imagen del HUD de The Waylanders"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498696/jorgepardo.dev/waylanders/uiux/hudloot_result_ylnr2x.webp"
                alt="Imagen del HUD de The Waylanders"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498694/jorgepardo.dev/waylanders/uiux/menuloading_ebz1io.webp"
                alt="Imagen del HUD de The Waylanders"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498694/jorgepardo.dev/waylanders/uiux/amerginjoins_result_b0lmdl.webp"
                alt="Imagen del HUD de The Waylanders"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
