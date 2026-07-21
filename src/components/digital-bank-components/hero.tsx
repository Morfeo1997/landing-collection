import HeroDesktop from "../../assets/images/digitalbank/image-mockups.png";
import BgIntroDesktop from "../../assets/bg/digitalbank/bg-intro-desktop.svg";
import BgIntroMobile from "../../assets/bg/digitalbank/bg-intro-mobile.svg";

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-digitalbank-very-light-gray
      "
    >
      <div
        className="
          mx-auto
          grid
          min-h-[760px]
          max-w-7xl
          items-center
          gap-12
          px-6
          pt-24
          pb-20

          lg:grid-cols-2
          lg:px-8
        "
      >
        {/* ========================= */}
        {/* Image */}
        {/* ========================= */}

        <div
          className="
            relative
            order-1
            h-[360px]

            lg:order-2
            lg:h-[760px]
          "
        >
          {/* Background */}

          <picture>
            <source media="(min-width:1024px)" srcSet={BgIntroDesktop} />

            <img
              src={BgIntroMobile}
              alt=""
              aria-hidden="true"
              className="
                absolute
                -top-40
                left-1/2
                w-[760px]
                max-w-none
                -translate-x-1/2

                lg:-top-52
                lg:left-16
                lg:w-[1200px]
                lg:translate-x-0
              "
            />
          </picture>

          {/* Mockups */}

          <img
            src={HeroDesktop}
            alt="Digitalbank mobile app"
            className="
              absolute
              -top-28
              left-1/2
              z-10
              w-[360px]
              max-w-none
              -translate-x-1/2

              sm:w-[430px]

              lg:-top-16
              lg:left-28
              lg:w-[760px]
              lg:translate-x-0
            "
          />
        </div>

        {/* ========================= */}
        {/* Content */}
        {/* ========================= */}

        <div
          className="
            order-2
            text-center

            lg:order-1
            lg:max-w-xl
            lg:text-left
          "
        >
          <h1
            className="
              text-5xl
              leading-tight
              font-light
              text-digitalbank-dark-blue

              md:text-6xl
            "
          >
            Next generation
            <br />
            digital banking
          </h1>

          <p
            className="
              mt-8
              text-lg
              leading-8
              text-digitalbank-grayish-blue
            "
          >
            Take your financial life online. Your Digitalbank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <button
            className="
              mt-10
              rounded-full
              bg-gradient-to-r
              from-digitalbank-lime
              to-digitalbank-cyan
              px-9
              py-4
              font-semibold
              text-white
              transition
              hover:opacity-70
            "
          >
            Request Invite
          </button>
        </div>
      </div>
    </section>
  );
}
