import React from "react";
import Slider from "react-slick";

export const Main = () => {
  const mainCarousel = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    pauseOnHover: true,
  };

  return (
    // <div className=" h-screen color-6">
    //   <div className=" relative">
    //     <Slider {...mainCarousel} className="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100">
    //       <div className="w-full mx-auto">
    //         <img
    //           className="mx-auto"
    //           src="https://res.cloudinary.com/jorgepardor/image/upload/v1663353494/jorgepardo.dev/hero/3018204824_453ffe4ece_o_th5o6u.jpg"
    //           alt="Imagen de variedades"
    //         />
    //       </div>
    //       <div className="w-full mx-auto">
    //         <img
    //           className="mx-auto"
    //           src="https://res.cloudinary.com/jorgepardor/image/upload/v1663353493/jorgepardo.dev/hero/3012023372_07fdcbace2_o_ohk8xe.jpg"
    //           alt="Imagen de variedades"
    //         />
    //       </div>
    //       <div  className="w-full mx-auto">
    //         <img
    //           className="mx-auto"
    //           src="https://res.cloudinary.com/jorgepardor/image/upload/v1663353493/jorgepardo.dev/hero/3017244081_dfd2e3c505_o_jndtwb.jpg"
    //           alt="Imagen de variedades"
    //         />
    //       </div>
    //     </Slider>
    //   </div>
    //   <div className="relative">
    // <div className="row flex justify-evenly align-middle">
    //   <h1 className="w-1/4 my-auto text-5xl text-DarkGR font-Ral text-center">
    //     JORGEPARDO.DEV
    //   </h1>

    //   <section className="w-1/4">
    //     <nav className="flex justify-center cl-effect-18">
    //       <a href="/graphicdesign" className="font-Ral" Data-hover="Graphic">
    //         Graphic
    //       </a>
    //       <a href="/waylanders" className="font-Ral" data-hover="UX/UI">
    //         UX/UI
    //       </a>
    //       {/* <a href="..." className="font-Ral" data-hover="Code">
    //     Code
    //   </a>
    //   <a href="..." className="font-Ral" data-hover="Other">
    //     Other
    //   </a> */}
    //       <a href="..." className="font-Ral" data-hover="Profile">
    //         Profile
    //       </a>
    //     </nav>
    //   </section>
    // </div>

    //   <div className="row p-4 md:flex md:items-center md:justify-items-center md:p-6">
    //     <div className=" w-full md:w-1/4 text-left text-sm font-Ral text-Light-gray dark:text-gray-400">
    //       2022. All Rights Reserved.
    //     </div>
    //     <div className="w-full md:w-1/4 m-auto mt-3 sm:mt-0"></div>
    //     <ul className="flex justify-center items-centertext-sm text-Light-gray dark:text-gray-400 ">
    //       <li>
    //         <a
    //           href="/assets/Elizabeth Lara Gonzalez.pdf"
    //           download
    //           className="font-Ral text-sm  mr-4 hover:text-Yellow-custom md:mr-6"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           Currículo
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="https://www.behance.net/jorgepardo"
    //           className="font-Ral text-sm mr-4 hover:text-Yellow-custom md:mr-6"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           Behance
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="https://www.linkedin.com/in/jorgeluispardo/"
    //           className="font-Ral text-sm mr-4 hover:text-Yellow-custom md:mr-6"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           LinkedIn
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="/contacto"
    //           className="font-Ral text-sm hover:text-Yellow-custom"
    //         >
    //           Contacto
    //         </a>
    //       </li>
    //     </ul>
    //   </div>

    //   </div>
    // </div>

    <section class="relative bg-DarkBG">
      <img
        class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
        src="https://res.cloudinary.com/jorgepardor/image/upload/v1663358017/jorgepardo.dev/hero/2347341057_bb3d81cb7e_o_jhifmr.webp"
        alt="..."
      />

{/* 
<div id="default-carousel" class="relative z-0 inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100" data-carousel="slide">

    <div class=" h-56 overflow-hidden rounded-lg md:h-96">

        <div class=" duration-75 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="">
            <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1663358017/jorgepardo.dev/hero/2347341057_bb3d81cb7e_o_jhifmr.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div class="duration-100 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1663358017/jorgepardo.dev/hero/2347341057_bb3d81cb7e_o_jhifmr.webp" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div class="duration-100 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
            <img src="https://res.cloudinary.com/jorgepardor/image/upload/v1663358017/jorgepardo.dev/hero/2347341057_bb3d81cb7e_o_jhifmr.webpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>

    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>

    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div> */}


      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-TW-bg-dark sm:to-transparent"></div>
      <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-TW-bg-dark sm:to-transparent"></div>

      <div class="relative px-4 py-32 mx-auto max-w-screen-xl lg:h-screen lg:items-center lg:flex">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-5xl text-DarkGR font-Ral text-center sm:text-5xl">
            JORGEPARDO.DEV
          </h1>

          <nav class="flex flex-wrap mt-8 text-center gap-4 cl-effect-18">
            <a
              href="/graphicdesign"
              className="font-Ral text-xl"
              Data-hover="Graphic"
            >
              Graphic
            </a>
            <a href="/waylanders" className="font-Ral" Data-hover="Graphic">
              UX/UI
            </a>
            <a href="/graphicdesign" className="font-Ral" Data-hover="Graphic">
              Profile
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};
