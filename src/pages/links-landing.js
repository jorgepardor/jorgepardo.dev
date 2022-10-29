import React from "react";
import { Links } from "../components/common/links";

export const LinksLanding = () => {
  return (
    <div className="bg-TW-bg-dark h-screen">
      <div className="py-4  pt-4 mt-3 md:mt-32">
        <img
          class="p-1 w-3/4 md:w-1/4 h-3/4 md:h-1/4 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mx-auto"
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1667066100/profile_square_eltvcm.webp"
          alt="avatar de Jorge Pardo"
        />
      </div>
      <Links />
    </div>
  );
};
