import React from "react";
import Slider from "react-slick";

export const UxPreviousMain = () => {
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
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425656/jorgepardo.dev/waylanders/other/main%20menu/1_splashscreen_om45ae.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425656/jorgepardo.dev/waylanders/other/main%20menu/2_main_menu_1_oefwwb.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425655/jorgepardo.dev/waylanders/other/main%20menu/2.1.1_select_faction_bwc7ks.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425656/jorgepardo.dev/waylanders/other/main%20menu/2.1.1_select_faction_2_mmwe2m.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425655/jorgepardo.dev/waylanders/other/main%20menu/2.1.1_select_faction_1_owu1hr.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425656/jorgepardo.dev/waylanders/other/main%20menu/2.1.2_select_class_c0se5v.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425657/jorgepardo.dev/waylanders/other/main%20menu/2.1.2_select_class_2_kjbkr7.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425655/jorgepardo.dev/waylanders/other/main%20menu/2.1.3.1_Character_gender_-_2.1.3.2_character_name_-_2.1.3.3_body_type_okhsrx.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425655/jorgepardo.dev/waylanders/other/main%20menu/2.1.3.4_face_style_obbdbu.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425655/jorgepardo.dev/waylanders/other/main%20menu/2.1.3.5_hair_style_ryaorf.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425656/jorgepardo.dev/waylanders/other/main%20menu/2.1.3.6_tattos_and_marks_ypq4cd.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425658/jorgepardo.dev/waylanders/other/main%20menu/2.1.3.7_clothing_style_kxecjd.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425656/jorgepardo.dev/waylanders/other/main%20menu/2.1.4_popup_char_confirm_uttibs.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425656/jorgepardo.dev/waylanders/other/main%20menu/2.1.5_popup_back_to_main_g8gdkh.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660425657/jorgepardo.dev/waylanders/other/main%20menu/2.10_quit_game_zijlse.webp"
              alt="Imagen de variedades"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
