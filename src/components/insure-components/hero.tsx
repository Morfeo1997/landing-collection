import HeroDesktop from "../../assets/images/insure/image-intro-desktop.jpg";
import HeroMobile from "../../assets/images/insure/image-intro-mobile.jpg";

import PatternLeftDesktop from "../../assets/bg/insure/bg-pattern-intro-left-desktop.svg";
import PatternRightDesktop from "../../assets/bg/insure/bg-pattern-intro-right-desktop.svg";

import PatternLeftMobile from "../../assets/bg/insure/bg-pattern-intro-left-mobile.svg";
import PatternRightMobile from "../../assets/bg/insure/bg-pattern-intro-right-mobile.svg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ==================== MOBILE ==================== */}

      <div className="md:hidden">
        {/* Hero Image */}

        <img
          src={HeroMobile}
          alt="Family walking together"
          className="w-full object-cover"
        />

        {/* Content */}

        <div className="relative bg-insure-dark-violet px-6 py-24 text-center text-white">
          {/* Background Patterns */}

          <img
            src={PatternLeftMobile}
            alt=""
            aria-hidden="true"
            className="absolute top-0 left-0 pointer-events-none select-none"
          />

          <img
            src={PatternRightMobile}
            alt=""
            aria-hidden="true"
            className="absolute right-0 bottom-[-180px] pointer-events-none select-none"
          />

          <div className="relative z-10">
            <div className="mx-auto mb-10 h-px w-36 bg-white/70" />

            <h1
              className="
                font-serif
                text-5xl
                leading-none
                tracking-tight
              "
            >
              Humanizing
              <br />
              your insurance.
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-sm
                text-[15px]
                leading-7
                text-gray-200
              "
            >
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </p>

            <button
              className="
                mt-10
                border-2
                border-white
                px-8
                py-3
                text-sm
                font-bold
                uppercase
                tracking-[0.18rem]
                transition
                hover:bg-white
                hover:text-insure-dark-violet
              "
            >
              View Plans
            </button>
          </div>
        </div>
      </div>

      {/* ==================== DESKTOP ==================== */}

      <div className="relative hidden bg-insure-dark-violet md:block">
        {/* Background Pattern */}

        <img
          src={PatternRightDesktop}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            top-0
            right-0
            select-none
          "
        />

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between
            gap-20
            px-8
            pt-24
          "
        >
          {/* Left */}

          <div className="relative z-10 flex-1 pb-28 text-white">
            <div className="mb-16 h-px w-40 bg-white/70" />

            <h1
              className="
                max-w-xl
                font-serif
                text-7xl
                leading-none
                tracking-tight
              "
            >
              Humanizing
              <br />
              your insurance.
            </h1>

            <p
              className="
                mt-8
                max-w-lg
                text-lg
                leading-8
                text-gray-200
              "
            >
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.
            </p>

            <button
              className="
                mt-10
                border-2
                border-white
                px-8
                py-3
                text-sm
                font-bold
                uppercase
                tracking-[0.2rem]
                transition
                hover:bg-white
                hover:text-insure-dark-violet
              "
            >
              View Plans
            </button>
          </div>

          {/* Right Image */}

          <div className="relative z-10 flex-1 self-start">
            <img
              src={HeroDesktop}
              alt="Family walking together"
              className="
                relative
                top-16
                ml-auto
                w-full
                max-w-lg
                object-cover
              "
            />
          </div>
        </div>

        {/* Bottom Left Pattern */}

        <img
          src={PatternLeftDesktop}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[-320px]
            left-0
            select-none
          "
        />
      </div>
    </section>
  );
}
