import React from "react";
import Slider from "react-slick";

export const Venezolana = () => {
  const venezolanaCarousel = {
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
          <div className="row">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1663484662/jorgepardo.dev/design/venezolana%20elem/Venezolana-header_uimv1f.webp"
              alt="Imagen de rediseño de marca de Venezolana"
            />
          </div>
          <div className="flex justify-center col-span-2">
            <img
              className="w-full"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334565/jorgepardo.dev/design/venezolana%20elem/695e9b19200653.562d670c88287_result_vaxgje.webp"
              alt="Imagen de rediseño de marca de Venezolana"
            />
            <img
              className="w-fit"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334565/jorgepardo.dev/design/venezolana%20elem/121d4f19200653.562d6723c2e18_result_wmfdmi.webp"
              alt="Imagen de rediseño de marca de Venezolana"
            />
          </div>

          <div className="flex justify-center mx-auto">
            <img
              className="w-1/2 p-8"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334565/jorgepardo.dev/design/venezolana%20elem/6f5db719200653.562d67238ccc6_result_srbmgy.webp"
              alt="Imagen de rediseño de marca de Venezolana"
            />
            <img
              className="w-1/2 p-8"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334565/jorgepardo.dev/design/venezolana%20elem/9b515519200653.562d66c90ddf5_result_psgu0k.webp"
              alt="Imagen de rediseño de marca de Venezolana"
            />
          </div>

          <div className="flex justify-center mx-auto col-span-2">
            <img
              className="w-fit"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334566/jorgepardo.dev/design/venezolana%20elem/ea5b7019200653.562d66c90bc2b_result_pz8tet.webp"
              alt="Imagen de rediseño de marca de Venezolana"
            />
            <img
              className="w-full"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334565/jorgepardo.dev/design/venezolana%20elem/74400d19200653.562d670ca464e_result_mvpbkl.webp"
              alt="Imagen de rediseño de marca de Venezolana"
            />
          </div>

          <div className="flex justify-center col-span-3">
            <img
              className="w-full"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334566/jorgepardo.dev/design/venezolana%20elem/c5dafc19200653.562d6715e95a9_result_rghcta.webp"
              alt="Imagen de rediseño de marca de Venezolana"
            />
            <img
              className="w-fit"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334565/jorgepardo.dev/design/venezolana%20elem/951ef619200653.562d6724591fd_result_rbnwr6.webp"
              alt="Imagen de rediseño de marca de Venezolana"
            />
            <img
              className="w-fit"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334565/jorgepardo.dev/design/venezolana%20elem/39b3bb19200653.562d66ec679b5_result_tol2q9.webp"
              alt="Imagen de rediseño de marca de Venezolana"
            />
          </div>

          <hr className="mb-8" />

          <Slider {...venezolanaCarousel}>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334605/jorgepardo.dev/design/venezolana%20manual/398cd219199663.562d66c141e70_result_j1u2e5.webp"
                alt="Imagen de rediseño de marca de Venezolana"
              />
            </div>
            <div className="w-80 mx-auto">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334603/jorgepardo.dev/design/venezolana%20manual/5eac6f19199663.562d66fe42d84_result_xez8fv.webp"
                alt="Imagen del rediseño de la aerolínea Venezolana"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334603/jorgepardo.dev/design/venezolana%20manual/7bca0819199663.562d66bf15ab4_result_zkfzb5.webp"
                alt="Imagen del rediseño de la aerolínea Venezolana"
              />
            </div>
            <div>
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334605/jorgepardo.dev/design/venezolana%20manual/95153919199663.562d66e8cbd4e_result_z3prgv.webp"
                alt="Imagen del rediseño de la aerolínea Venezolana"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
