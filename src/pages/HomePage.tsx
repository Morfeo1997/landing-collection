import LandingCard from "../components/LandingCard";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
        relative
        overflow-hidden
      "
    >
      {/* Gradient radial */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(80,80,80,0.35)_0%,rgba(20,20,60,0.8)_45%,rgba(0,0,0,1)_100%)]
        "
      />

      {/* Blur decorativo */}
      <div
        className="
          absolute
          top-0
          left-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-zinc-500/10
          blur-[120px]
        "
      />

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-20
        "
      >
        <div className="mb-16 text-center">
          <p
            className="
              mb-3
              text-sm
              uppercase
              tracking-[0.3em]
              text-zinc-400
            "
          >
            Portfolio
          </p>

          <h1
            className="
              text-5xl
              font-bold
              md:text-7xl
            "
          >
            Landing Pages
          </h1>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-zinc-400
            "
          >
            Coleccion de landing pages creadas por <a className="text-blue-700 font-bold hover:text-blue-500 transition-colors duration-300" target="_blank" href="https://gaston-gomez1997.netlify.app">Gastón Gómez</a>
          </p>
        </div>

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {projects.map((project) => (
            <LandingCard
              key={project.route}
              {...project}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
