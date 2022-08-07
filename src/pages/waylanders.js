import React from "react";

// const carousel = new Carousel(items, options);

// const prevButton = document.getElementById('data-carousel-prev');
// const nextButton = document.getElementById('data-carousel-next');

// prevButton.addEventListener('click', () => {
//     carousel.prev();
// });

// nextButton.addEventListener('click', () => {
//     carousel.next();
// });

export const Waylanders = () => {
  return (
    <section className="bg-TW-bg-dark">
      <div className="flex items-center pt-16 pb-4">
        <img
          className="w-1/6 m-auto"
          src="https://res.cloudinary.com/jorgepardor/image/upload/v1659882606/jorgepardo.dev/waylanders/logo_waylanders_White_cejixe.webp"
          alt="The Waylanders logo"
        />
      </div>

      <div className="border-b border-TW-tx-disable dark:border-TW-tx-disable">
        <ul className="flex flex-wrap justify-center -mb-px text-md font-medium text-center text-TW-tx-disable dark:text-gray-400">
          <li className="mr-2">
            <a href="#" className="btn-waylanders">
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5 icon-waylanders"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              UX-UI
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="btn-waylanders" aria-current="page">
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              Branding
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="btn-waylanders">
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
              </svg>
              Graphic Design
            </a>
          </li>
          <li className="mr-2">
            <a href="#" className="btn-waylanders">
              <svg
                aria-hidden="true"
                className="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fillRule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Other
            </a>
          </li>
        </ul>
      </div>

      {/* UX Carousel */}
      <div className="container">
        <div className="flex items-center justify-center mx-14 mt-14">
          <div className="w-4/6 mr-6">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895469/jorgepardo.dev/waylanders/characterdesign_1_deqgql.webp"
              className="..."
              alt="..."
            />
            {/* <div id="default-carousel" className="relative" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
                  First Slide
                </span>
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895469/jorgepardo.dev/waylanders/characterdesign_1_deqgql.webp"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895469/jorgepardo.dev/waylanders/characterdesign_1_deqgql.webp"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/docs/images/carousel/carousel-3.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div> */}
          </div>
          <div className="w-2/6 ml-6">
            <div>
              <p className="subtitle-waylanders mb-8">Character creator</p>
            </div>
            <p className="text-waylanders">
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
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mx-14 mt-14">
          <div className="w-2/6 mr-6">
            <div>
              <p className="subtitle-waylanders  text-right mb-8">Ingame menu</p>
            </div>
            <p className="text-waylanders text-right">
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
            </p>
          </div>
          <div className="w-4/6 ml-6">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895469/jorgepardo.dev/waylanders/characterdesign_1_deqgql.webp"
              className="..."
              alt="..."
            />
            {/* <div id="default-carousel" className="relative" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
                  First Slide
                </span>
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895469/jorgepardo.dev/waylanders/characterdesign_1_deqgql.webp"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895469/jorgepardo.dev/waylanders/characterdesign_1_deqgql.webp"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/docs/images/carousel/carousel-3.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div> */}
          </div>
        </div>

        <div className="flex items-center justify-center mx-14 mt-14">
          <div className="w-4/6 mr-6">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895469/jorgepardo.dev/waylanders/characterdesign_1_deqgql.webp"
              className="..."
              alt="..."
            />
            {/* <div id="default-carousel" className="relative" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
                  First Slide
                </span>
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895469/jorgepardo.dev/waylanders/characterdesign_1_deqgql.webp"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="https://res.cloudinary.com/jorgepardor/image/upload/v1659895469/jorgepardo.dev/waylanders/characterdesign_1_deqgql.webp"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              <div
                className="hidden duration-700 ease-in-out"
                data-carousel-item
              >
                <img
                  src="/docs/images/carousel/carousel-3.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 1"
                data-carousel-slide-to="0"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to="1"
              ></button>
              <button
                type="button"
                className="w-3 h-3 rounded-full"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to="2"
              ></button>
            </div>
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div> */}
          </div>
          <div className="w-2/6 ml-6">
            <div>
              <p className="subtitle-waylanders mb-8">Combat / Ingame </p>
            </div>
            <p className="text-waylanders">
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
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
