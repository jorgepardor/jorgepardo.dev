import React from "react";
import Slider from "react-slick";

export const Wazzp = () => {
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
          <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/41417a42882325.57daf7f06b4d9_1__result_nfvfuk.webp" />
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

        <div>
          <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/c4068d42882325.57daf7f06c939_1__result_bz5xer.webp" />
          <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/33052442882325.57daf7f06c2ce_result_aelhnb.webp" />
          <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/426df042882325.57daf7f06bb9c_1__result_lplqdm.webp" />
          <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/31c84d42882325.57daf7f06d4c5_result_m29gak.webp" />
          <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/2ecee842882325.57daf7f06cece_1__result_zds9d9.webp" />
          <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/31880442882325.57daf7f1554cc_result_tmnwhu.webp" />
        </div>

      </div>
    </div>
  </div>
  );
};
