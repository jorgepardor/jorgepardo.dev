import React from "react";

export const Footer = () => {
	return (
		<footer class="p-4 md:flex md:items-center md:justify-between md:p-6 ">
			<div class="md:w-1/2 mx-auto text-center">
				<span class=" text-sm text-Light-gray ">
					2022. All Rights Reserved.
				</span>
			</div>
			<ul class="md:w-1/2 m-auto flex justify-center items-center mt-3  text-sm text-Light-gray dark:text-gray-400 sm:mt-0">
				<li>
					<a href="/assets/Elizabeth Lara Gonzalez.pdf" download class="font-Mukta text-sm  mr-4 hover:text-Yellow-custom md:mr-6" target="_blank" rel="noreferrer">
						Currículo
					</a>
				</li>
				<li>
					<a href="https://www.behance.net/jorgepardo" class="font-Mukta text-sm mr-4 hover:text-Yellow-custom md:mr-6" target="_blank" rel="noreferrer">
						Behance
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/jorgeluispardo/" class="font-Mukta text-sm mr-4 hover:text-Yellow-custom md:mr-6" target="_blank" rel="noreferrer">
						LinkedIn
					</a>
				</li>
				<li>
					<a href="/contacto" class="font-Mukta text-sm hover:text-Yellow-custom">
						Contacto
					</a>
				</li>
			</ul>
		</footer>
	);
};
