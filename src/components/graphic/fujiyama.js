import React from "react";
import Slider from "react-slick";

export const Fujiyama = () => {
  const carouselFujiyama = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    lazyLoad: true,
    pauseOnHover: true,
  };

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mx-14 py-14">
        <div className="container">
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334229/jorgepardo.dev/fujiyama/espa%C3%B1a/2c1aed110586413.5ff1dff1bada8_result_vvv0ol.webp"
              alt="Logo de restaurante Fujiyama"
            />
          </div>

          <div className="container mx-auto p-8">
            <div className="flex flex-row flex-wrap -mx-2">
              <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 px-2">
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/c01f90110586413.5ff1c85232429_result_fetoaf.webp"
                  className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                />
              </div>
              <div className="w-full md:w-1/2 mb-4 px-2">
                <div className="flex flex-col sm:flex-row md:flex-col -mx-2">
                  <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
                    <img
                      src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334231/jorgepardo.dev/fujiyama/espa%C3%B1a/bc7dd1110586413.5ff1c852329a4_result_v0nyk0.webp"
                      className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    />
                  </div>
                  <div className="w-full sm:w-1/2 md:w-full h-48 xl:h-64 px-2">
                    <img
                      src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334229/jorgepardo.dev/fujiyama/espa%C3%B1a/0a58f7110586413.5ff1c94e01b91_result_rq5drw.webp"
                      className="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334231/jorgepardo.dev/fujiyama/espa%C3%B1a/945f6c110586413.5ff1c852310dc_result_szqlzp.webp"
                  className="mx-auto w-1/3"
                />
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334230/jorgepardo.dev/fujiyama/espa%C3%B1a/10cd8f110586413.5ff1c85232f19_result_tsqb4e.webp"
                  className="mx-auto w-1/3"
                />
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334229/jorgepardo.dev/fujiyama/espa%C3%B1a/1c099f110586413.5ff1c85231693_result_boeqld.webp"
                  className="mx-auto w-1/3"
                />
              </div>
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334229/jorgepardo.dev/fujiyama/espa%C3%B1a/3f4acf110586413.5ff1ccb25e9a4_result_gxzgkn.webp" />
          </div>

          <div className="flex mb-8">
            <img
              className="w-1/3"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/f4ce9b110586413.5ff1c8523089c_result_pu3kbg.webp"
            />
            <img
              className="w-1/3"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334230/jorgepardo.dev/fujiyama/espa%C3%B1a/8a9be3110586413.5ff1c852300e8_result_rndcqe.webp"
            />
            <img
              className="w-1/3"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334229/jorgepardo.dev/fujiyama/espa%C3%B1a/4b29c5110586413.5ff1c85231da9_result_rs33ns.webp"
            />
          </div>

          <Slider {...carouselFujiyama}>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/d19bcc110586413.5ff1c8d3a03e7_result_kiqsoo.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/cf7e33110586413.5ff1c8d3a127e_result_e8ns4w.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334231/jorgepardo.dev/fujiyama/espa%C3%B1a/b22d89110586413.5ff1c8d39f572_result_wrtb8w.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334231/jorgepardo.dev/fujiyama/espa%C3%B1a/c4ee4d110586413.5ff1c8d39ef8e_result_bzbmva.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334230/jorgepardo.dev/fujiyama/espa%C3%B1a/46aa52110586413.5ff1c8d39fc95_result_lj1iz5.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334229/jorgepardo.dev/fujiyama/espa%C3%B1a/8a75b0110586413.5ff1c8d39e865_result_nkc5dp.webp"
                alt="Imagen de variedades"
              />
            </div>
          </Slider>

          <div className="mt-2 mb-8 flex justify-center">
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334228/jorgepardo.dev/fujiyama/espa%C3%B1a/1c6347110586413.5ff1cd56e0d8f_result_le4q1l.webp" />
          </div>

          <div className="flex justify-center mx-auto">
            <img
              className="w-1/3 p-8"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/d8be62110586413.5ff1ca9ac8423_result_wzjqbw.webp"
            />
            <img
              className="w-1/3 p-8"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334230/jorgepardo.dev/fujiyama/espa%C3%B1a/9bd5a3110586413.5ff1c990dd1ef_result_bmnfas.webp"
            />
            <img
              className="w-1/3 p-8"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334229/jorgepardo.dev/fujiyama/espa%C3%B1a/0ec405110586413.5ff1c990dca1b_result_yg0pot.webp"
            />
          </div>

          <div className="mb-8 mt-8">
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334230/jorgepardo.dev/fujiyama/espa%C3%B1a/21f047110586413.5ff1cc119f9fc_result_txcib1.webp" />
          </div>

          <Slider {...carouselFujiyama}>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334230/jorgepardo.dev/fujiyama/espa%C3%B1a/151fcf110586413.5ff1dcb43a0bd_result_ft03vb.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334231/jorgepardo.dev/fujiyama/espa%C3%B1a/a276a1110586413.5ff1dcb43a711_result_vht98e.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334233/jorgepardo.dev/fujiyama/espa%C3%B1a/da1da3110586413.5ff1dcb494b5f_result_nrwxrc.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/9014e8110586413.5ff1dcb495698_result_rxoqb2.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/d87854110586413.5ff1dcb4c8f88_result_q96d9v.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334229/jorgepardo.dev/fujiyama/espa%C3%B1a/2bf294110586413.5ff1dcb4c87a0_result_icj5bk.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/e1bdcb110586413.5ff1dd07e5917_result_syvfw7.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334229/jorgepardo.dev/fujiyama/espa%C3%B1a/5d91d7110586413.5ff1dd0837604_result_qowurf.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334229/jorgepardo.dev/fujiyama/espa%C3%B1a/002e57110586413.5ff1dd07e6239_result_uceeqk.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334231/jorgepardo.dev/fujiyama/espa%C3%B1a/6703a6110586413.5ff1dd0878196_result_mlp6ek.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/c1346c110586413.5ff1dd087872e_result_pvlbpm.webp"
                alt="Imagen de variedades"
              />
            </div>
          </Slider>
          <div className="mt-8 flex justify-center">
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334232/jorgepardo.dev/fujiyama/espa%C3%B1a/e9f829110586413.5ff1cdc838fad_result_axpk2d.webp" />
          </div>

          <hr className=" mt-12 mb-8"/>
          <div className="flex justify-end">
            <p class="text-gray-500 dark:text-gray-400">
              Ver mas en{"  "}
              <a
                href="https://www.behance.net/gallery/110586413/Fujiyama-Sushi-Bar-A-Coruna"
                class="inline-flex items-center font-medium text-DarkGR dark:text-DarkGR hover:underline"
                target="_blank"
              >
                Behance
                <svg
                  aria-hidden="true"
                  class="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
