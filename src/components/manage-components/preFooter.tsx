import BgMobile from '../../assets/bg/manage/bg-simplify-section-mobile.svg';
import BgDesktop from '../../assets/bg/manage/bg-simplify-section-desktop.svg'

export default function PreFooter() {
  return (
    <section className="relative overflow-hidden bg-manage-orange-strong"
    >
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
          md:block
          pointer-events-none
          select-none
        "
      />

      {/* Fondo Mobile */}
      <img
        src={BgMobile}
        alt=""
        aria-hidden="true"
        className="
          absolute
          inset-0
          right-0
          left-0
          h-full
          w-1/2
          object-cover
          md:hidden
          pointer-events-none
          select-none
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-10
          px-6
          py-20
          lg:flex-row
        "
      >
        <h2
          className="
            max-w-lg
            text-center
            text-4xl
            font-bold
            leading-tight
            text-white
            lg:text-left
          "
        >
          Simplify how your team works today.
        </h2>

        <button
          className="
            rounded-full
            bg-white
            px-8
            py-3
            font-semibold
            text-manage-orange-strong
            shadow-xl
            transition
            hover:scale-105
          "
        >
          Get Started
        </button>
      </div>
    </section>
  );
}
