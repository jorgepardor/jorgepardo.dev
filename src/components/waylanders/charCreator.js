import React from "react";
import Slider from "react-slick";

export const CharCreator = () => {
  const waylandersCharCarousel = {
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
          arrows:false,
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
            <p className="subtitle-waylanders mb-2 md:mb-8">Creador de personajes</p>
          </div>

          <Slider {...waylandersCharCarousel}>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498694/jorgepardo.dev/waylanders/uiux/creator1_result_bvv7mh.webp"
                alt="Imagen del creador de personajes de The Waylanders"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498694/jorgepardo.dev/waylanders/uiux/creator2_result_spconx.webp"
                alt="Imagen del creador de personajes de The Waylanders"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498694/jorgepardo.dev/waylanders/uiux/creator3_result_ah0bun.webp"
                alt="Imagen del creador de personajes de The Waylanders"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1660498694/jorgepardo.dev/waylanders/uiux/creator4_result_z4kwme.webp"
                alt="Imagen del creador de personajes de The Waylanders"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
