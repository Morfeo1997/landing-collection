import HeroDesktop from "@/assets/image-hero-desktop.jpg";
import HeroMobile from "@/assets/image-hero-mobile.jpg";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[650px] overflow-hidden">
      {/* Imagen Responsive */}

      <picture>
        <source
          media="(min-width:1024px)"
          srcSet={HeroDesktop}
        />

        <img
          src={HeroMobile}
          alt="Virtual Reality"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </picture>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/35" />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-7xl
          items-center
          px-6
          lg:px-10
        "
      >
        <div
          className="
            max-w-xl
            border-2
            border-white
            p-6

            md:p-10
          "
        >
          <h1
            className="
              text-5xl
              font-light
              uppercase
              leading-none
              tracking-wide
              text-white

              md:text-7xl
            "
          >
            Immersive
            <br />
            Experiences
            <br />
            That Deliver
          </h1>
        </div>
      </div>
    </section>
  );
}
