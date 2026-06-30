import BgDesktop from "../../assets/bg/shortly/bg-boost-desktop.svg";
import BgMobile from "../../assets/bg/shortly/bg-boost-mobile.svg";

export default function PreFooter() {
  return (
    <section className="relative overflow-hidden bg-[#3b3054]">
      {/* Desktop Background */}

      <img
        src={BgDesktop}
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          hidden
          h-full
          w-full
          object-cover
          lg:block
          pointer-events-none
          select-none
        "
      />

      {/* Mobile Background */}

      <img
        src={BgMobile}
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          lg:hidden
          pointer-events-none
          select-none
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-center
          px-6
          py-20
          text-center
        "
      >
        <h2
          className="
            text-3xl
            font-bold
            text-white

            md:text-4xl
          "
        >
          Boost your links today
        </h2>

        <button
          className="
            mt-8
            rounded-full
            bg-cyan-400
            px-10
            py-4
            text-lg
            font-bold
            text-white
            transition-all
            duration-300
            hover:bg-cyan-300
            hover:scale-105
          "
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
