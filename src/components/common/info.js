import React from "react";

export const Info = () => {
  const tech = [
    "HTML",
    "CSS",
    "Bootstrap",
    "TailwindCSS",
    "Javascript",
    "React",
    "Ruby",
    "Ruby on Rails",
    "Python",
    "Flask",
    "SQLAlchemy",
    "NodeJs",
  ];

  const skills = [
    "Figma",
    "Zeplin",
    "Photoshop",
    "InDesign",
    "Illustrator",
    "XD",
    "After Effects",
    "Affinity Photo",
    "Affinity Designer",
    "Affinity Publisher",
  ];

  return (
    <section className="bg-TW-bg-dark container mx-auto">
      <div>
        <h3 className=" text-center font-Ral text-white">Sobre mí</h3>
      </div>
      <div className="rounded-xl mx-auto mt-10 bg-gradient-to-r p-[2px] from-[#6EE7B700] via-[#3B82F680] to-[#9333EA] w-2/3">
        <div className="flex flex-col justify-between h-full bg-TW-bg-dark text-white rounded-lg p-4">
          <div className="grid md:grid-cols-3 gap-4 p-4 mx-auto">
            <div className=" col-span-1">
              <img
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1651654050/14500640_10153702169466307_3937322170862077724_o_hidz7e.jpg"
                className="px-4"
              />
            </div>
            <div className=" col-span-2 px-4">
              <h2 className=" text-white font-Ral text-3xl">
                Hola, soy Jorge Luis Pardo
              </h2>
              <h4 className="font-Ral text-lg text-DarkPk">
                Diseñador UI/UX || Desarrollador frontend
              </h4>
              <p className=" text-white font-Ral text-md w-100 mt-5">
                Terminé mi carrera de diseño gráfico en 2012 y desde entonces he
                trabajado en proyectos relacionados a la programación y el
                diseño. Trabajé varios años compaginando tareas tanto de diseño
                offline (branding, impresos) como online (Desarrollo web con
                html/css, wordpress) para varios clientes. Durante los últimos 5
                años he trabajado en una empresa de videojuegos como Diseñador
                UI/UX, desarrollando un RPG en Unreal Engine. <br />
                <br /> He participado también en tareas de comunicación gráfica
                y en conferencias de desarrolladores en esa empresa. Actualmente
                he terminado mi formación como desarrollador full stack, en el
                que he profundizado mis conocimientos en Javascript, Tailwind,
                React con Flux, Python, SQL y varias tecnologías más que me han
                proporcionado muchos recursos para integrarlos a mis habilidades
                profesionales.
              </p>
              <table className="mt-5">
                <tr>
                  <td className=" text-white font-Ral text-md w-20">Email:</td>
                  <td className=" font-Ral text-md text-DarkPk">
                    <a href="mailto:hi@jorgepardo.dev">hi@jorgepardo.dev</a>
                  </td>
                </tr>
                <tr>
                  <td className=" text-white font-Ral text-md">Idiomas:</td>
                  <td className=" text-white font-Ral text-md">
                    Español / Inglés
                  </td>
                </tr>
              </table>
              <button
                type="button"
                class="mt-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Descarga mi CV
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3>Qué hago?</h3>
      </div>
      <div className="bg-DarkPk flex">
        <div className=" col-span-4">
          <img className="..." src="https://placehold.jp/150x150.png" />
          <h6> Frontend deveolpment</h6>
          <p>
            VHS scenester selvage JOMO palo santo cloud bread, adaptogen
            sartorial taiyaki single-origin coffee{" "}
          </p>
        </div>
        <div className=" col-span-4">
          <img className="..." src="https://placehold.jp/150x150.png" />
          <h6> Frontend deveolpment</h6>
          <p>
            VHS scenester selvage JOMO palo santo cloud bread, adaptogen
            sartorial taiyaki single-origin coffee{" "}
          </p>
        </div>
        <div className=" col-span-4">
          <img className="..." src="https://placehold.jp/150x150.png" />
          <h6> Frontend deveolpment</h6>
          <p>
            VHS scenester selvage JOMO palo santo cloud bread, adaptogen
            sartorial taiyaki single-origin coffee{" "}
          </p>
        </div>
      </div>
      <div>
        <h3>Lenguajes y habilidades</h3>
      </div>
      <div className="border-solid border-DarkGR border-2 rounded-2xl">
        <div className="grid md:grid-cols-2 gap-1 p-4 mx-auto">
          <div className="col-span-1">
            <div className=" max-w-1/2">
              {skills.map((value, index) => {
                return (
                  <div>
                    <span
                      key={index}
                      class="px-4 py-2  my-1 mx-1 rounded-full text-gray-500  border-2  border-solid border-DarkGR hover:text-DarkPk text-sm flex align-center w-max cursor-pointer"
                    >
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" col-span-1">
            {tech.map((value, index) => {
              return (
                <div key={index}>
                  <p class="px-4 py-2 mx-1 rounded-full text-gray-500 border-2 border-solid border-DarkGR hover:text-DarkPk text-sm flex align-center w-max cursor-pointer">
                    {value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <h3>Trayectoria</h3>
      </div>
      <div className="bg-DarkPk flex">
        <div className="col-span-6">
          <h4>Experiencia</h4>
          <ul>
            <li>
              <h6>Titulo del curro</h6>
              <p>Tiempo en el curro</p>
              <p>Donde fue el curro</p>
              <p>Descripcion del currentColor</p>
            </li>
            <li>
              <h6>Titulo del curro</h6>
              <p>Tiempo en el curro</p>
              <p>Donde fue el curro</p>
              <p>Descripcion del currentColor</p>
            </li>
            <li>
              <h6>Titulo del curro</h6>
              <p>Tiempo en el curro</p>
              <p>Donde fue el curro</p>
              <p>Descripcion del currentColor</p>
            </li>
          </ul>
        </div>
        <div className="col-span-6">
          <h4>Educacion</h4>
          <ul>
            <li>
              <h6>Titulo del curro</h6>
              <p>Tiempo en el curro</p>
              <p>Donde fue el curro</p>
              <p>Descripcion del currentColor</p>
            </li>
            <li>
              <h6>Titulo del curro</h6>
              <p>Tiempo en el curro</p>
              <p>Donde fue el curro</p>
              <p>Descripcion del currentColor</p>
            </li>
            <li>
              <h6>Titulo del curro</h6>
              <p>Tiempo en el curro</p>
              <p>Donde fue el curro</p>
              <p>Descripcion del currentColor</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3>Enlaces</h3>
        <div className="bg-DarkPk flex">
          <div className=" col-span-4">
            <img className="..." src="https://placehold.jp/150x150.png" />
          </div>
          <div className=" col-span-4">
            <img className="..." src="https://placehold.jp/150x150.png" />
          </div>
          <div className=" col-span-4">
            <img className="..." src="https://placehold.jp/150x150.png" />
          </div>
        </div>
      </div>
      <div className="bg-DarkPk flex"></div>
      <div>
        <h3>Contacto</h3>
      </div>
      <div className="bg-DarkPk flex"></div>

      <div className="bg-DarkPk flex"></div>
    </section>
  );
};
