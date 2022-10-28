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
      <div className="mt-44">
        <h3 className="font-Sha profile-titles pb-24">¿Quién soy?</h3>
      </div>
      <div className="rounded-xl mx-auto mt-6 w-2/3">
        <div className="grid md:grid-cols-3 gap-4 p-4 mx-auto">
          <div className=" col-span-1">
            <img
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1666709961/profile_xyk2ag.webp"
              className="px-2"
            />
          </div>
          <div className=" col-span-2">
            <h2 className=" text-white font-Ral text-3xl">
              Hola, soy Jorge Luis Pardo
            </h2>
            <h4 className="font-Ral text-lg text-DarkPk">
              Desarrollador frontend || Diseñador UI/UX || Diseñador Gráfico
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
            </table>
            <a
              type="button"
              href="https://drive.google.com/file/d/1qn38wpkRzumUQ2sri8Wr7JvO1VhK4hZQ/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
              class="mt-5 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Descarga mi CV
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-Sha profile-titles pt-10 pb-32">¿Qué hago?</h3>
      </div>
      <div className="flex">
        <div className="col-span-4 w-1/3">
          <div className="d-flex justify-center opacity-50 hover:opacity-100 transition-all ease-in-out duration-1000">
            <img
              className="rounded-full w-3/4 py-3 mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1666642476/jorgepardo.dev/profile%20/code-form_obd2vw.svg"
            />
          </div>
          <h6 className="feats-title font-Ral text-xl">
            Desarrollo de frontend
          </h6>
          {/* <p className="feats-description">
            VHS scenester selvage JOMO palo santo cloud bread, adaptogen
            sartorial taiyaki single-origin coffee
          </p> */}
        </div>

        <div className="col-span-4 w-1/3">
          <div className="d-flex justify-center opacity-50 hover:opacity-100 transition-all ease-in-out duration-1000">
            <img
              className="rounded-full w-3/4 py-3 mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1666642476/jorgepardo.dev/profile%20/user-form_ayxs3b.svg"
            />
          </div>
          <h6 className="feats-title font-Ral text-xl">Diseño UI/UX</h6>
          {/* <p className="feats-description">
            VHS scenester selvage JOMO palo santo cloud bread, adaptogen
            sartorial taiyaki single-origin coffee
          </p> */}
        </div>

        <div className="col-span-4 w-1/3">
          <div className="d-flex justify-center opacity-50 hover:opacity-100 transition-all ease-in-out duration-1000">
            <img
              className="rounded-full w-3/4 py-3 mx-auto"
              src="https://res.cloudinary.com/jorgepardor/image/upload/v1666642054/jorgepardo.dev/profile%20/graphic-form_hwxvrg.svg"
            />
          </div>
          <h6 className="feats-title font-Ral text-xl"> Diseño Gráfico</h6>
          {/* <p className="feats-description">
            VHS scenester selvage JOMO palo santo cloud bread, adaptogen
            sartorial taiyaki single-origin coffee
          </p> */}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="font-Sha profile-titles pt-20 pb-32">¿Cómo lo hago?</h3>
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

      <div className="mt-16">
        <h3 className="font-Sha profile-titles pt-20 pb-32">
          ¿Dónde aprendí a hacerlo?
        </h3>
      </div>
      <div className="grid-rows-2 gap-8 flex pb-32">
        <div className="w-1/2">
          <h4 className="font-Ral education-titles">Experiencia</h4>
          <ul className="px-8">
            <li className="xp-box">
              <h6 className="xp-title font-Ral">Desarrollador de front-end</h6>
              <p className="xp-company font-Ral">Anjana Investments, S.L.</p>
              <p className="xp-duration font-Ral">jun. 2022 - actualidad</p>
              <p className="xp-description font-Ral">
                En este trabajo estoy participando en el rediseño de{" "}
                <a
                  href="https://www.autingo.es/"
                  className="font-bold hover:text-DarkPk transition-all ease-in-out duration-1000"
                >
                  Autingo.es
                </a>
                , un portal que ofrece packs de servicios para reparación y
                mantenimiento de vehículos. Mi trabajo ha consistido en la
                maquetación y desarrollo de las diferentes vistas que tiene el
                site y su interacción con el backend. Paralelamente he cumplido
                tareas de corrección de bugs y correcciones visuales en los
                proyectos que tiene la empresa,{" "}
                <a
                  href="https://www.aurgi.com/"
                  className="font-bold hover:text-DarkPk transition-all ease-in-out duration-1000"
                >
                  Aurgi.com
                </a>{" "}
                y{" "}
                <a
                  href="https://www.motortown.es/"
                  className="font-bold hover:text-DarkPk transition-all ease-in-out duration-1000"
                >
                  Motortown.es
                </a>
                .
                <br />
                <br /> En todos los proyectos, he trabajado con Ruby y Ruby on
                Rails, Javascript y he utilizado frameworks como Bootstrap y
                SASS.
              </p>
            </li>
            <li className="xp-box">
              <h6 className="xp-title font-Ral">UI/UX Designer</h6>
              <p className="xp-company font-Ral">Gato Salvaje Studio</p>
              <p className="xp-duration font-Ral">sept. 2017 - feb. 2022</p>
              <p className="xp-description font-Ral">
                Empecé a trabajar en Gato Studio en el inicio del proyecto{" "}
                <a
                  href="http://thewaylanders.com/"
                  className="font-bold hover:text-DarkPk transition-all ease-in-out duration-1000"
                >
                  The Waylanders
                </a>
                , un RPG inspirado en la saga Dragon Age y ambientado en la
                época celta y medieval en el que controlas una party de 5
                personajes. El juego ha sido lanzado en{" "}
                <a
                  href="https://store.steampowered.com/app/957710/The_Waylanders/"
                  className="font-bold hover:text-DarkPk transition-all ease-in-out duration-1000"
                >
                  Steam
                </a>{" "}
                a principios de 2022. En Gato he trabajado como lead del equipo
                de UI/UX para el desarrollo de este proyecto desde el inicio del
                mismo.
                <br />
                <br />
                A lo largo del proyecto, trabajé como jefe del departamento de
                UI/UX, el cual estaba integrado por cuatro personas entre
                diseñadores y programadores, aunque durante algunas fases del
                desarrollo contamos con colaboración de parte del equipo de
                concept. Además de trabajar en UI/UX, durante algunas fases del
                proyecto he participado en tareas del equipo de Guion y
                Marketing, donde me pidieron que participase en el diseño de
                piezas de arte promocionales del videojuego, las campañas de
                Kickstarter del juego de mesa y el videojuego de The Waylanders
                y el diseño de los stands utilizados en presentaciones de la
                empresa en ferias. <br />
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
          <h4 className="font-Ral education-titles">Educación</h4>
          <ul className="px-8">
            <li className="xp-box">
              <h6 className="xp-title font-Ral">
                Desarrollador de Software Full-Stack
              </h6>
              <p className="xp-company font-Ral">4Geeks Academy España</p>
              <p className="xp-duration font-Ral">abr. 2022</p>
              <p className="xp-description font-Ral">
                Completé el curso de Desarrollo Full Stack a principios de 2022
                en el cual utilicé un set de las tecnologías mas utilizadas en
                el desarrollo web actual. En cuanto a frontend, trabajé
                inicialmente con HTML/CSS/Bootstrap para repasar los conceptos
                básicos de maquetación y posteriormente una parte del curso fue
                dedicada a aprender javascript y react, con el cual pude ahondar
                en los hooks como herramientas para programar las funcionalidad
                de una web y las interacciones con APIs. <br />
                <br />
                El módulo de backend estuvo centrado en Python, con el cual
                desarrollé varios ejercicios en los que tenía que diseñar una
                API que proporcionara información al frontend. Hicimos
                ejercicios de Data Modelling para ayudarnos a entender los
                principios del manejo de datos con SQL. En este módulo
                utilizamos también SQL Alchemy y Flask para diseñar APIs. <br />
                <br />
                Como proyecto final decidimos realizar un software de gestión de
                un gimnasio, Black Lion Box, en el cual nos pidieron desarrollar
                el front y el backend de forma que tanto usuarios como
                administradores pudieran registrarse en la página y apuntarse a
                las diferentes sesiones que estaban disponibles. Utilizamos
                todas las tecnologías que nos enseñaron en el curso, y
                adicionalmente utilizamos Tailwinds para tener mayor libertad de
                maquetación y un par de librerías externas para poder utilizar
                mapas, carruseles, elementos gráficos y gestión de formularios
                de contacto.
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
      {/* <div className="my-16">
        <h3 className="font-Sha profile-titles pt-20 pb-32">Enlaces</h3>
        <div className="w-2/3 flex mx-auto">
          <div className=" col-span-4 w-1/4 saturate-50 opacity-50 hover:saturate-100 hover:opacity-100">
            <a href="/waylanders">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1666703597/jorgepardo.dev/profile%20/waylanders_square_atzwk0.webp"
              />
            </a>
          </div>
          <div className=" col-span-4 w-1/4 saturate-50 opacity-50 hover:saturate-100 hover:opacity-100">
            <a href="/graphic">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1666702490/jorgepardo.dev/profile%20/fuji_square_xqtovz.webp"
              />
            </a>
          </div>
          <div className=" col-span-4 w-1/4">
            <a href="/waylanders">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1666702490/jorgepardo.dev/profile%20/fuji_square_xqtovz.webp"
              />
            </a>
          </div>
          <div className=" col-span-4 w-1/4">
            <a href="/waylanders">
              <img
                className="mx-auto"
                src="https://res.cloudinary.com/jorgepardor/image/upload/v1666702490/jorgepardo.dev/profile%20/fuji_square_xqtovz.webp"
              />
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
};
