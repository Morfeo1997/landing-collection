import PatternDesktop from "../../assets/bg/insure/bg-pattern-how-we-work-desktop.svg";
import PatternMobile from "../../assets/bg/insure/bg-pattern-how-we-work-mobile.svg";

export default function PreFooter() {
  return (
    <section className="bg-white pb-36">
      <div
        className="
          relative
          mx-auto
          overflow-hidden
          bg-insure-Dark-Blue
          px-8
          py-18

          md:flex
          md:max-w-7xl
          md:items-center
          md:justify-between
          md:px-20
        "
      >
        {/* Background Pattern */}

        <img
          src={PatternDesktop}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            top-0
            right-0
            hidden
            h-full
            object-contain
            select-none

            md:block
          "
        />

        <img
          src={PatternMobile}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            top-0
            right-0
            object-contain
            select-none

            md:hidden
          "
        />

        {/* Content */}

        <div className="relative z-10">
          <h2
            className="
              mx-auto
              max-w-sm
              text-center
              font-serif
              text-5xl
              leading-none
              text-white

              md:mx-0
              md:max-w-xl
              md:text-left
              md:text-6xl
            "
          >
            Find out more about how we work
          </h2>
        </div>

        {/* CTA */}

        <div className="relative z-10 mt-12 flex justify-center md:mt-0">
          <button
            className="
              border-2
              border-white
              px-8
              py-3
              text-sm
              font-bold
              uppercase
              tracking-[0.18rem]
              text-white
              transition

              hover:bg-white
              hover:text-insure-Dark-Blue
            "
          >
            How We Work
          </button>
        </div>
      </div>
    </section>
  );
}
