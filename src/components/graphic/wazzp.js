import React from "react";
import Slider from "react-slick";

export const Wazzp = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center mx-14 py-14">
        <div className="container">
          <div className="row flex justify-center">
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/41417a42882325.57daf7f06b4d9_1__result_nfvfuk.webp" />
          </div>

          <div className="row mx-auto">
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/c4068d42882325.57daf7f06c939_1__result_bz5xer.webp" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto">
        <img
          className="w-1/2 p-8"
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/426df042882325.57daf7f06bb9c_1__result_lplqdm.webp"
        />
        <img
          className="w-1/2 p-8"
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/33052442882325.57daf7f06c2ce_result_aelhnb.webp"
        />
      </div>
      <div className="flex justify-center mx-auto">
        <img
          className="w-1/2 p-8"
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/2ecee842882325.57daf7f06cece_1__result_zds9d9.webp"
        />
        <img
          className="w-1/2 p-8"
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1661334525/jorgepardo.dev/design/wazzp/31c84d42882325.57daf7f06d4c5_result_m29gak.webp"
        />
      </div>

      <hr className=" mt-12 mb-8" />
      <div className="flex justify-end">
        <p className="text-gray-500 dark:text-gray-400">
          Ver mas en{"  "}
          <a
            href="https://www.behance.net/gallery/42882325/Wazzp-Studio"
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
  );
};
