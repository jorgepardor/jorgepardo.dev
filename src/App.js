import "./App.css";

function App() {
  return (
    <div className="flex h-screen justify-center items-center color-6">
      <h1 className="w-full text-5xl text-DarkGR font-Ral text-center">
        JORGEPARDO.DEV
      </h1>

      <section className="w-full">
        <nav className="mx-auto cl-effect-18">
          <a href="/graphicdesign" className="font-Ral" Data-hover="Graphic">
            Graphic
          </a>
          <a href="/waylanders" className="font-Ral" data-hover="UX/UI">
            UX/UI
          </a>
          {/* <a href="..." className="font-Ral" data-hover="Code">
            Code
          </a>
          <a href="..." className="font-Ral" data-hover="Other">
            Other
          </a> */}
          <a href="..." className="font-Ral" data-hover="Profile">
            Profile
          </a>
        </nav>
      </section>
    </div>
  );
}

export default App;
