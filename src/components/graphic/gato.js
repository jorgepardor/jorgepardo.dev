import React from "react";
import Slider from "react-slick";

export const Gato = () => {

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mx-14 py-14">
        <div className="container">
          <div className="row">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1662909664/jorgepardo.dev/design/gato/gatoHeader_gnl9sq.webp"
              className="mx-auto"
            />
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1662911062/jorgepardo.dev/design/gato/gatoAlternatives_nkavqv.webp"
              className="mx-auto w-4/6"
            />

            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1662912144/jorgepardo.dev/design/gato/alternatives_hrybpr.webp"
              className="mx-auto w-4/6"
            />
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1662911432/jorgepardo.dev/design/gato/gatoCards_ugavge.webp"
              className="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
