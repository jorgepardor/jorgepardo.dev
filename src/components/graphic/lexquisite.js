import React from "react";
import Slider from "react-slick";

export const Lexquisite = () => {
  const bookletLexquisite = {
    dots: false,
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
  };

  const menuLexquisiteCarousel = {
    dots: false,
    arrows: false,
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
          <div className="row">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334441/jorgepardo.dev/design/lexquisiteespa%C3%B1a/a762d1110641393.5ff2fe0b946d4_result_y3ytdk.webp"
              className="mx-auto"
            />
          </div>

          <div className="grid grid-cols-3 mb-8">
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334442/jorgepardo.dev/design/lexquisiteespa%C3%B1a/ebccd7110641393.5ff2fe0aced75_result_tdv4b4.webp" />
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334442/jorgepardo.dev/design/lexquisiteespa%C3%B1a/7cfc23110641393.5ff2fe0acd5fd_result_mngebt.webp" />
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334442/jorgepardo.dev/design/lexquisiteespa%C3%B1a/deaf18110641393.5ff2fe0acc594_result_im03u1.webp" />
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334442/jorgepardo.dev/design/lexquisiteespa%C3%B1a/d38586110641393.5ff2fe0acde56_result_asfice.webp" />
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334442/jorgepardo.dev/design/lexquisiteespa%C3%B1a/03fe76110641393.5ff2fe0acbc15_result_utrb53.webp" />
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334441/jorgepardo.dev/design/lexquisiteespa%C3%B1a/959982110641393.5ff2fe0accd61_result_ffkyeo.webp" />
            {/* <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334441/jorgepardo.dev/design/lexquisiteespa%C3%B1a/816527110641393.5ff2fe0ace6c4_result_iich2e.webp" /> */}
          </div>

          <Slider {...menuLexquisiteCarousel} className="mb-8">
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334443/jorgepardo.dev/design/lexquisiteespa%C3%B1a/62aa24110641393.5ff2fe09d65ea_result_rx21xx.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334443/jorgepardo.dev/design/lexquisiteespa%C3%B1a/c0e3f3110641393.5ff2fe09d619a_result_xgshic.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334448/jorgepardo.dev/design/lexquisiteespa%C3%B1a/90e826110641393.5ff2fe0a52fed_result_gmbk4w.webp"
                alt="Imagen de variedades"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334443/jorgepardo.dev/design/lexquisiteespa%C3%B1a/d83481110641393.5ff2fe0a5293e_result_fjwolm.webp"
                alt="Imagen de variedades"
              />
            </div>
          </Slider>

          <hr className="mb-8" />

          <div className="mb-8 flex align-middle">
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334485/jorgepardo.dev/design/lexquisitevenezuela/40c31819197009.562d66352a5cc_1__result_wcw35b.webp" />
          </div>

          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334485/jorgepardo.dev/design/lexquisitevenezuela/406a5419197009.562d665de90d0_result_jmc7b0.webp" />
            </div>
            <div className="...">
              <Slider {...bookletLexquisite}>
                <div className="w-80 mx-auto">
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334485/jorgepardo.dev/design/lexquisitevenezuela/796bac19197009.562d664236059_result_vqw2cj.webp"
                    alt="Imagen de variedades"
                  />
                </div>
                <div>
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334485/jorgepardo.dev/design/lexquisitevenezuela/f9064819197009.562d65e368873_result_jcy4kn.webp"
                    alt="Imagen de variedades"
                  />
                </div>
                <div className="w-80 mx-auto">
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334485/jorgepardo.dev/design/lexquisitevenezuela/b2a7af19197009.562d665f70dac_result_lkxtuf.webp"
                    alt="Imagen de variedades"
                  />
                </div>
                <div>
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334485/jorgepardo.dev/design/lexquisitevenezuela/84161b19197009.562d65e31f54d_result_jzj8od.webp"
                    alt="Imagen de variedades"
                  />
                </div>
                <div>
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334485/jorgepardo.dev/design/lexquisitevenezuela/b79fe919197009.562d665f88a1d_result_ohup2x.webp"
                    alt="Imagen de variedades"
                  />
                </div>
                <div>
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334484/jorgepardo.dev/design/lexquisitevenezuela/2fedce19197009.562d6653bca2d_result_uuqzzh.webp"
                    alt="Imagen de variedades"
                  />
                </div>
                <div>
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334484/jorgepardo.dev/design/lexquisitevenezuela/5fefef19197009.562d65e348f5c_result_kn5ypo.webp"
                    alt="Imagen de variedades"
                  />
                </div>
                <div>
                  <img
                    className="mx-auto"
                    src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334484/jorgepardo.dev/design/lexquisitevenezuela/0f088c19197009.562d667062a92_result_os2pwf.webp"
                    alt="Imagen de variedades"
                  />
                </div>
              </Slider>
            </div>
          </div>

          <hr className=" mt-12 mb-8" />
          <div className="flex justify-end">
            <p className="text-gray-500 dark:text-gray-400">
              Ver mas en{"  "}
              <a
                href="https://www.behance.net/gallery/110641393/LExquisite-Grill-Ribs"
                className="inline-flex items-center font-medium text-DarkGR dark:text-DarkGR hover:underline"
                target="_blank"
              >
                Behance
                <svg
                  aria-hidden="true"
                  className="ml-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
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
