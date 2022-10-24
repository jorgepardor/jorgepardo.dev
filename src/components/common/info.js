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
    "Photoshop",
    "InDesign",
    "Illustrator",
    "XD",
    "Figma",
    "Zeplin",
    "After Effects",
    "Affinity Photo",
    "Affinity Designer",
    "Affinity Publisher",
  ];

  return (
    <section className="bg-TW-bg-dark container mx-auto">
      <div className=" mt-44">
        <h3 className=" text-center font-Sha text-DarkPk text-3xl">
          ¿Quién soy?
        </h3>
      </div>
      <div className="rounded-xl mx-auto mt-6 w-2/3">
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
              trabajado en proyectos relacionados a la programación y el diseño.
              Trabajé varios años compaginando tareas tanto de diseño offline
              (branding, impresos) como online (Desarrollo web con html/css,
              wordpress) para varios clientes. Durante los últimos 5 años he
              trabajado en una empresa de videojuegos como Diseñador UI/UX,
              desarrollando un RPG en Unreal Engine. <br />
              <br /> He participado también en tareas de comunicación gráfica y
              en conferencias de desarrolladores en esa empresa. Actualmente he
              terminado mi formación como desarrollador full stack, en el que he
              profundizado mis conocimientos en Javascript, Tailwind, React con
              Flux, Python, SQL y varias tecnologías más que me han
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

      <div className="mt-32">
        <h3 className="text-center font-Sha text-DarkPk text-3xl my-8">
          ¿Qué hago?
        </h3>
      </div>
      <div className="flex">
        <div className="col-span-4">
          <div className="d-flex justify-center opacity-50 hover:opacity-100 transition-all ease-in-out duration-1000">
            <img
              className="rounded-full w-3/4 py-3 mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1666642476/jorgepardo.dev/profile%20/code-form_obd2vw.svg"
            />
          </div>
          <h6 className="feats-title font-Ral text-xl">
            Desarrollo de frontend
          </h6>
          <p className="feats-description">
            VHS scenester selvage JOMO palo santo cloud bread, adaptogen
            sartorial taiyaki single-origin coffee
          </p>
        </div>

        <div className="col-span-4">
          <div className="d-flex justify-center opacity-50 hover:opacity-100 transition-all ease-in-out duration-1000">
            <img
              className="rounded-full w-3/4 py-3 mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1666642476/jorgepardo.dev/profile%20/user-form_ayxs3b.svg"
            />
          </div>
          <h6 className="feats-title font-Ral text-xl">Diseño UI/UX</h6>
          <p className="feats-description">
            VHS scenester selvage JOMO palo santo cloud bread, adaptogen
            sartorial taiyaki single-origin coffee
          </p>
        </div>

        <div className="col-span-4">
          <div className="d-flex justify-center opacity-50 hover:opacity-100 transition-all ease-in-out duration-1000">
            <img
              className="rounded-full w-3/4 py-3 mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1666642054/jorgepardo.dev/profile%20/graphic-form_hwxvrg.svg"
            />
          </div>
          <h6 className="feats-title font-Ral text-xl"> Diseño Gráfico</h6>
          <p className="feats-description">
            VHS scenester selvage JOMO palo santo cloud bread, adaptogen
            sartorial taiyaki single-origin coffee
          </p>
        </div>
      </div>




      
      <div className="mt-32">
        <h3 className="text-center font-Sha text-DarkPk text-3xl my-8">
          ¿Cómo lo hago?
        </h3>
      </div>
      <div className="...">
        <div className="p-4">
          <ul className="chips-container mb-2">
            {tech.map((value, index) => {
              return (
                <li key={index} class="chips hover:text-DarkPk">
                  {value}
                </li>
              );
            })}
          </ul>
          <ul className="chips-container">
            {skills.map((value, index) => {
              return (
                <li key={index} class="chips hover:text-DarkPk">
                  {value}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="mt-32">
        <h3 className=" text-center font-Sha text-DarkPk text-3xl my-8">
          ¿Dónde aprendí a hacerlo?
        </h3>
      </div>
      <div className="grid-rows-2 gap-8 flex">
        <div className="w-1/2">
          <h4 className="text-center font-Ral font-bold text-white pb-10">
            Experiencia
          </h4>
          <ul className="px-8">
            <li className="xp-box">
              <h6 className="xp-title font-Ral">Desarrollador de front-end</h6>
              <p className="xp-company font-Ral">Anjana Investments, S.L.</p>
              <p className="xp-duration font-Ral">jun. 2022 - actualidad</p>
              <p className="xp-description font-Ral">
                Descripcion del currentColor
              </p>
            </li>
            <li className="xp-box">
              <h6 className="xp-title font-Ral">UI/UX Designer</h6>
              <p className="xp-company font-Ral">Gato Salvaje Studio</p>
              <p className="xp-duration font-Ral">sept. 2017 - feb. 2022</p>
              <p className="xp-description font-Ral">
                Empecé a trabajar en Gato Studio en el inicio del proyecto The
                Waylanders, un RPG inspirado en la saga Dragon Age y ambientado
                en la época celta y medieval en el que controlas una party de 5
                personajes. El juego actualmente se encuentra en fase de Acceso
                Anticipado en Steam y se espera el lanzamiento final durante el
                2021. En Gato he trabajado como lead del equipo de UI/UX para el
                desarrollo de este proyecto desde el inicio del mismo.
                <br />
                <br />
                Actualmente somos cuatro personas en el equipo, aunque durante
                algunas fases del desarrollo hemos contado con colaboración de
                parte del equipo de concept. Además de trabajar en UI/UX,
                durante algunas fases del proyecto he participado en tareas del
                equipo de Guion y Marketing, donde me han pedido que participe
                en el diseño de piezas de arte promocionales del videojuego, las
                campañas de Kickstarter del juego de mesa y el videojuego de The
                Waylanders y el diseño de los stands utilizados en
                presentaciones de la empresa en ferias. <br />
                <br />
                Acudí a las ediciones del año 2018 y 2019 de la Gamescom, en
                Colonia, donde presentamos el proyecto ante el público. En la
                edición de 2019 participé en la Devcom, donde hicimos una
                presentación contando nuestra experiencia diseñando un RPG.
              </p>
            </li>
            <li className="xp-box">
              <h6 className="xp-title font-Ral">Diseñador Gráfico Creativo</h6>
              <p className="xp-company font-Ral">
                Grupo Comercial Rodriguez Marchesini
              </p>
              <p className="xp-duration font-Ral">ago. 2004 - jun. 2015</p>
              <p className="xp-description font-Ral">
                Trabajé con ellos durante 10 años, inicialmente como asistente
                administrativo. Posteriormente tuve la oportunidad de manejar la
                imagen gráfica de las empresas que componen este grupo. Para
                Fujiyama Sushi Bar trabajé en la elaboración de 3 ediciones del
                menú, en el cual hice el trabajo de fotografía y diseño.
                Posteriormente la empresa abrió una sede del restaurant en A
                Coruña y realicé un rediseño completo de la marca para ello.
                Durante varias campañas hice los artes gráficos (posters,
                gigantografías, volantes) de las promociones de la temporada.
                Participé también, junto a un programador, en el diseño de la
                página web de la empresa. A L'Exquisite le hice el desarrollo de
                la identidad corporativa integralmente, la cual se aplicó al
                negocio desde su apertura.
              </p>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <h4 className="text-center font-Ral font-bold text-white pb-10">
            Educacion
          </h4>
          <ul className="px-8">
            <li className="xp-box">
              <h6 className="xp-title font-Ral">
                Desarrollador de Software Full-Stack
              </h6>
              <p className="xp-company font-Ral">4Geeks Academy España</p>
              <p className="xp-duration font-Ral">abr. 2022</p>
              <p className="xp-description font-Ral">
                Tecnologías aprendidas: - Control de versiones (Git) - HTML, CSS
                y Bootstrap - Sass - DOM y Eventos - React.js con Flux - Hooks
                de React - API Rest - Python - Flask - Bases de datos
                relacionales: MySQL - SQLAlchemy - Despliegue con Heroku y
                Vercel
              </p>
            </li>
            <li className="xp-box">
              <h6 className="xp-title font-Ral">
                Curso de Desarrollo de Videojuegos
              </h6>
              <p className="xp-company font-Ral">
                Gato Salvaje SL / Concello da CoruñaGato Salvaje SL
              </p>
              <p className="xp-duration font-Ral">2016 - 2017</p>
              <p className="xp-description font-Ral">
                Participé en el 1er Curso de Desarrollo de Videojuegos,
                impartido por Gato Salvaje, en el que impartieron los
                fundamentos del desarrollo de desarrollo de videojuegos,
                modelado y animación 3d, marketing y monetización de
                aplicaciones. <br />
                <br />
                Al concluir el curso, inicié una fase de prácticas en el Vivero
                de Empresas del Papagayo, donde participé en el desarrollo de
                dos demos de videojuegos, en el departamento de UI/UX. De igual
                forma, como parte del curso, inicié junto a otros compañeros una
                startup de estudio de videojuegos (Wazzp Studio), con la cual
                iniciamos un proyecto indie que aun esta en desarrollo.
              </p>
            </li>
            <li className="xp-box">
              <h6 className="xp-title font-Ral">
                Técnico Superior en Diseño Gráfico
              </h6>
              <p className="xp-company font-Ral">CU Monseñor de Talavera</p>
              <p className="xp-duration font-Ral">ene 2010 - dic 2012</p>
              <p className="xp-description font-Ral">
                Estudié Diseño Gráfico en el Colegio Universitario Monseñor de
                Talavera entre Enero de 2010 y Diciembre de 2012. Mi TFG
                consistió en un rediseño de la identidad corporativa y de
                comunicación de una línea aerea: Venezolana de Aviación. Dicho
                trabajo fue presentado ante el jurado en Noviembre de 2012 y
                obtuve una calificación de 19/20. En los enlaces hay una muestra
                del Manual de Identidad Corporativa desarrollado para esa
                presentación.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-32">
        <h3 className=" text-center font-Sha text-DarkPk text-3xl my-8">
          Enlaces
        </h3>
        <div className="bg-DarkPk flex">
          <div className="col-span-4 w-1/3">
            <img className="mx-auto" src="https://placehold.jp/500x500.png" />
          </div>
          <div className=" col-span-4 w-1/3">
            <img className="mx-auto" src="https://placehold.jp/500x500.png" />
          </div>
          <div className=" col-span-4 w-1/3">
            <img className="mx-auto" src="https://placehold.jp/500x500.png" />
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
