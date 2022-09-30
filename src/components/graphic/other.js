import React from "react";
import Slider from "react-slick";
import { Heading } from "../common/heading";

export const Other = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mx-14 py-14">
        <div className="container">
          <div className="row">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334662/jorgepardo.dev/design/dada/c13ae137783115.574c823b62f40_d3gkr5.jpg"
              className="mx-auto"
            />
          </div>
          {/* <div className="grid grid-cols-2 mb-8">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334661/jorgepardo.dev/design/dada/b0dbdd37783115.574c823b63497_xu6mvq.jpg"
              className="mx-auto"
            />{" "}
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334662/jorgepardo.dev/design/dada/b0dbdd37783115.574c823b63497_1_ihljfw.jpg"
              className="mx-auto"
            />
          </div> */}

          <div className="grid grid-cols-2 mb-8">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334661/jorgepardo.dev/design/dada/9c21c237783115.574cb670bd305_ejddw3.jpg"
              className="mx-auto"
            />{" "}
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334661/jorgepardo.dev/design/dada/69ddc437783115.574cb670bd977_ngrtmz.jpg"
              className="mx-auto"
            />
          </div>
          <div className="row">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334662/jorgepardo.dev/design/dada/28733e37783115.574c807b48aa8_a8huql.jpg"
              className="mx-auto mb-8"
            />
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334663/jorgepardo.dev/design/dada/117ee237783115.574c823b63a92_1_poskz8.jpg"
              className="mx-auto w-5/6"
            />
          </div>
        </div>
      </div>
      <Heading />
    </div>
  );
};
