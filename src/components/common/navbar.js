import React, { useState } from "react";

export const Navbar = () => {

	const [menuToggle, setMenuToggle] = useState(false);


	return (

		<nav className="px-2 sm:px-4 py-2.5">
			<div className="container mx-auto">
				{/* <a href="/" className="flex items-center">
					<img
						src="https://res.cloudinary.com/elizapardo/image/upload/v1656870897/logotokenbw_cqvis3.webp"
						className="mr-3 h-6 sm:h-9"
						alt="Elizabeth Lara"
					/>
					<p>Jorge</p>
				</a> */}
				<div className="flex md:order-2">
					{/* <button
						type="button"
						className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-Light-gray dark:focus:ring-gray-600"
						aria-controls="mobile-menu"
						aria-expanded="false"
						id="mobileMenuToggle"
						onClick={() => setMenuToggle(!menuToggle)}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clipRule="evenodd"
							></path>
						</svg>
						<svg
							className="hidden w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clipRule="evenodd"
							></path>
						</svg>
					</button> */}

					{/* <a
						href="/contacto"
						type="button"
						className="hidden md:block font-Mukta text-Yellow-custom bg-Purple-dark hover:bg-Purple-light focus:ring-4 focus:outline-none focus:ring-Purple-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
					>
						Contacto
					</a> */}

				</div>
				<div
					className={"justify-between items-center w-full md:flex md:w-auto md:order-1 " + (menuToggle ? '' : 'hidden')}
					id="mobile-menu"
				>
					<ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
						<li>
							<a
								href="..."
								className="font-Mukta text-sm block py-2 pr-4 pl-3 text-Light-gray border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-Yellow-custom md:p-0 dark:hover:text-white"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="..."
								className="font-Mukta text-sm block py-2 pr-4 pl-3 text-Light-gray border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-Yellow-custom md:p-0 dark:hover:text-white"
							>
								Graphic
							</a>
						</li>
						<li>
							<a
								href="..."
								className="font-Mukta text-sm block py-2 pr-4 pl-3 text-Light-gray border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-Yellow-custom md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-Light-gray dark:hover:text-white md:dark:hover:bg-transparent dark:border-Light-gray"
							>
								UX/UI
							</a>
						</li>
						<li>
							<a
								href="..."
								className="font-Mukta text-sm block py-2 pr-4 pl-3 text-Light-gray border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-Yellow-custom md:p-0 dark:hover:text-white"
							>
								Code
							</a>
						</li>
						<li>
							<a
								href="..."
								className="font-Mukta text-sm block py-2 pr-4 pl-3 text-Light-gray border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-Yellow-custom md:p-0 dark:hover:text-white"
							>
								Other
							</a>
						</li>
						<li>
							<a
								href="..."
								className="font-Mukta text-sm block py-2 pr-4 pl-3 text-Light-gray border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-Yellow-custom md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-Light-gray dark:hover:text-white md:dark:hover:bg-transparent dark:border-Light-gray"
							>
								Profile
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
