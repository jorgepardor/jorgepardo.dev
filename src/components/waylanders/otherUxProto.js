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
    <div className="container mx-auto">
      <div className="flex items-center justify-center mx-14 py-14">
        <div className="container">
          <div className="row">
            <p className="subtitle-waylanders mb-8">Diseños previos de la UI</p>
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
    </div>
  );
};
