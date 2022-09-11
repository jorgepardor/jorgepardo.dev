import React from "react";
import Slider from "react-slick";

export const GraphicElements = () => {
  const waylandersGraphic = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 2000,
    autoplay: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="flex items-center justify-center mx-14 pt-14">
      <div className="container">
        <div className="row flex justify-center">
          <div className="col-12 col-md-4">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431440/jorgepardo.dev/waylanders/graphic/main_feats_waylanders_02_xtq3g5.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="col-12 col-md-4">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431440/jorgepardo.dev/waylanders/graphic/gallaecia_map_tky1g9.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="col-12 col-md-4">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431440/jorgepardo.dev/waylanders/graphic/kaltia_map_qcrfzg.webp"
              alt="Imagen de variedades"
            />
          </div>
        </div>
        <Slider {...waylandersGraphic}>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431191/jorgepardo.dev/waylanders/graphic/update_classes_mugc5t.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431191/jorgepardo.dev/waylanders/graphic/update_ons_fkjfnl.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431191/jorgepardo.dev/waylanders/graphic/update_locations2_dxl8ow.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431191/jorgepardo.dev/waylanders/graphic/update_WEAPONS_AND_ARMORS_hqjwux.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431191/jorgepardo.dev/waylanders/graphic/update_finisterre_tylngk.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431191/jorgepardo.dev/waylanders/graphic/update_story_okqitx.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431190/jorgepardo.dev/waylanders/graphic/update_mourians_ovlfcr.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431190/jorgepardo.dev/waylanders/graphic/update_humans_wwisgc.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431190/jorgepardo.dev/waylanders/graphic/update_formations_hsr4zr.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431190/jorgepardo.dev/waylanders/graphic/UPDATE_SANTIAGO_uriuj6.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431190/jorgepardo.dev/waylanders/graphic/UPDATE_BRIGANTIA_wvnns7.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431190/jorgepardo.dev/waylanders/graphic/update_goblins_kcbgun.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431190/jorgepardo.dev/waylanders/graphic/update_FOMORIANS_yhxdtv.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431189/jorgepardo.dev/waylanders/graphic/TheWaylanders_LiveStreaming_Banner_cfbckf.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431189/jorgepardo.dev/waylanders/graphic/update_48h_ca8tog.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div>
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431189/jorgepardo.dev/waylanders/graphic/update_24h_ificos.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="w-80 mx-auto">
            <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431191/jorgepardo.dev/waylanders/graphic/update_thankyou_mytsfm.webp"
              alt="Imagen de variedades"
            />
          </div>
        </Slider>
        <div className="flex flex-row">
          <div className="basis-2/5">
            <img
              className="..."
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431189/jorgepardo.dev/waylanders/graphic/imagen_ppal_01_noprealpha_vabcms.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="basis-2/5">
            <img
              className="..."
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431189/jorgepardo.dev/waylanders/graphic/00_Teaser_kickstarter_funded_rwaslc.webp"
              alt="Imagen de variedades"
            />
          </div>
          <div className="basis-1/5">
            {/* <img
              className="mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431191/jorgepardo.dev/waylanders/graphic/imagen_principal_propo2_vnulrk.webp"
              alt="Imagen de variedades"
            /> */}
            <img
              className="..."
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1660431440/jorgepardo.dev/waylanders/graphic/Waylanders_UnrealProjectIcon_v2_adw9ot.webp"
              alt="Imagen de variedades"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
