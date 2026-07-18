import HeroBgDesktop from "../../assets/bg/blogr/bg-pattern-intro-desktop.svg";
import HeroBgMobile from "../../assets/bg/blogr/bg-pattern-intro-mobile.svg";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-bl-[6rem]
        bg-gradient-to-br
        from-blogr-Red-400
        to-blogr-Red-500
      "
    >
      {/* Background Pattern Desktop */}

      <img
        src={HeroBgDesktop}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-[1350px]
          -left-[420px]
          hidden
          max-w-none
          select-none
          md:block
        "
      />

      {/* Background Pattern Mobile */}

      <img
        src={HeroBgMobile}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -top-56
          -left-72
          max-w-none
          select-none
          md:hidden
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[600px]
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-6
          pt-28
          pb-24
          text-center

          md:min-h-[600px]
          md:pt-36
        "
      >
        {/* Heading */}

        <h1
          className="
            max-w-4xl
            text-4xl
            font-semibold
            tracking-tight
            text-white

            md:text-7xl
          "
        >
          A modern publishing platform
        </h1>

        {/* Subtitle */}

        <p
          className="
            mt-6
            max-w-xl
            text-lg
            text-white/80

            md:text-xl
          "
        >
          Grow your audience and build your online brand
        </p>

        {/* CTA Buttons */}

        <div
          className="
            mt-12
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
          "
        >
          <button
            className="
              rounded-full
              bg-white
              px-8
              py-3
              font-semibold
              text-blogr-Red-500
              transition
              hover:bg-blogr-Red-400
              hover:text-white
            "
          >
            Start for Free
          </button>

          <button
            className="
              rounded-full
              border
              border-white
              px-8
              py-3
              font-semibold
              text-white
              transition
              hover:bg-white
              hover:text-blogr-Red-500
            "
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
