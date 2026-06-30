import HeroDesktop from "@/assets/illustration-working.svg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* HERO */}

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col-reverse
          items-center
          gap-16
          px-6
          pb-40
          pt-36

          lg:flex-row
          lg:justify-between
          lg:gap-8
        "
      >
        {/* Text */}

        <div className="max-w-xl text-center lg:text-left">
          <h1
            className="
              text-5xl
              font-bold
              leading-none
              tracking-tight
              text-gray-900

              md:text-6xl

              lg:text-7xl
            "
          >
            More than just
            <br />
            shorter links
          </h1>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-gray-400
            "
          >
            Build your brand's recognition and get detailed
            insights on how your links are performing.
          </p>

          <button
            className="
              mt-10
              rounded-full
              bg-cyan-400
              px-10
              py-4
              text-lg
              font-bold
              text-white
              transition
              hover:bg-cyan-300
            "
          >
            Get Started
          </button>
        </div>

        {/* Illustration */}

        <div
          className="
            flex
            justify-center

            lg:flex-1
            lg:justify-end
          "
        >
          <img
            src={HeroDesktop}
            alt="Working illustration"
            className="
              w-[140%]
              max-w-none

              lg:w-full
              lg:max-w-2xl
            "
          />
        </div>
      </div>

      {/* SHORTENER */}
    </section>
  );
}
