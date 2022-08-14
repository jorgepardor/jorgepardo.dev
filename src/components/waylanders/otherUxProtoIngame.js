import React from "react";
import Slider from "react-slick";

export const UxPreviousIngame = () => {
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
    <div className="flex items-center justify-center mx-14 mt-14">
      <div className="container">
        <Slider {...settings}>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660428961/jorgepardo.dev/waylanders/other/ingame/ScreenShot00125_zkc4cb.png"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660428961/jorgepardo.dev/waylanders/other/ingame/ScreenShot00101_uzz2uz.png"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426924/jorgepardo.dev/waylanders/other/ingame/hud_-_inscreen_indicators_light_vjuukm.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426924/jorgepardo.dev/waylanders/other/ingame/hud_-_inscreen_indicators_dark_lpj5ak.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426925/jorgepardo.dev/waylanders/other/ingame/inscreen_indicators_qq72cc.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426925/jorgepardo.dev/waylanders/other/ingame/Waylanders_UI_HUD_2_y5u93q.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426925/jorgepardo.dev/waylanders/other/ingame/Waylanders_UI_HUD_2_y5u93q.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426925/jorgepardo.dev/waylanders/other/ingame/Waylanders_UI_HUD__mt7xl9.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426923/jorgepardo.dev/waylanders/other/ingame/3.1.1_main_inventory_screen_2_a65u4d.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426924/jorgepardo.dev/waylanders/other/ingame/Formation_editor_l39syb.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426924/jorgepardo.dev/waylanders/other/ingame/Formation_Selector_ny0kvs.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426924/jorgepardo.dev/waylanders/other/ingame/CHARACTERS_MAIN_alt_j0ejdt.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426924/jorgepardo.dev/waylanders/other/ingame/Input_Controller_svtdah.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426923/jorgepardo.dev/waylanders/other/ingame/3.3.5_settings_1_if8alf.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426923/jorgepardo.dev/waylanders/other/ingame/3.3.5_settings_1_if8alf.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660426923/jorgepardo.dev/waylanders/other/ingame/3.1.1_map_quests_bichos_1_j8bqlf.webp"
              alt="Imagen de variedades"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
