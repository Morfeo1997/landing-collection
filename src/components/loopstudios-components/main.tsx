import InteractiveDesktop from "../../assets/images/loopstudios/desktop/image-interactive.jpg";
import InteractiveMobile from "../../assets/images/loopstudios/mobile/image-interactive.jpg";

import DeepEarthDesktop from "../../assets/images/loopstudios/desktop/image-deep-earth.jpg";
import NightArcadeDesktop from "../../assets/images/loopstudios/desktop/image-night-arcade.jpg";
import SoccerDesktop from "../../assets/images/loopstudios/desktop/image-soccer-team.jpg";
import GridDesktop from "../../assets/images/loopstudios/desktop/image-grid.jpg";
import AboveDesktop from "../../assets/images/loopstudios/desktop/image-from-above.jpg";
import BorealisDesktop from "../../assets/images/loopstudios/desktop/image-pocket-borealis.jpg";
import CuriosityDesktop from "../../assets/images/loopstudios/desktop/image-curiosity.jpg";
import FisheyeDesktop from "../../assets/images/loopstudios/desktop/image-fisheye.jpg";

import DeepEarthMobile from "../../assets/images/loopstudios/mobile/image-deep-earth.jpg";
import NightArcadeMobile from "../../assets/images/loopstudios/mobile/image-night-arcade.jpg";
import SoccerMobile from "../../assets/images/loopstudios/mobile/image-soccer-team.jpg";
import GridMobile from "../../assets/images/loopstudios/mobile/image-grid.jpg";
import AboveMobile from "../../assets/images/loopstudios/mobile/image-from-above.jpg";
import BorealisMobile from "../../assets/images/loopstudios/mobile/image-pocket-borealis.jpg";
import CuriosityMobile from "../../assets/images/loopstudios/mobile/image-curiosity.jpg";
import FisheyeMobile from "../../assets/images/loopstudios/mobile/image-fisheye.jpg";

const creations = [
  {
    title: "Deep Earth",
    desktop: DeepEarthDesktop,
    mobile: DeepEarthMobile,
  },
  {
    title: "Night Arcade",
    desktop: NightArcadeDesktop,
    mobile: NightArcadeMobile,
  },
  {
    title: "Soccer Team VR",
    desktop: SoccerDesktop,
    mobile: SoccerMobile,
  },
  {
    title: "The Grid",
    desktop: GridDesktop,
    mobile: GridMobile,
  },
  {
    title: "From Up Above VR",
    desktop: AboveDesktop,
    mobile: AboveMobile,
  },
  {
    title: "Pocket Borealis",
    desktop: BorealisDesktop,
    mobile: BorealisMobile,
  },
  {
    title: "The Curiosity",
    desktop: CuriosityDesktop,
    mobile: CuriosityMobile,
  },
  {
    title: "Make It Fisheye",
    desktop: FisheyeDesktop,
    mobile: FisheyeMobile,
  },
];

export default function Main() {
  return (
    <main>
      {/* ABOUT */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-40">
        <div className="relative">
          <picture>
            <source
              media="(min-width:1024px)"
              srcSet={InteractiveDesktop}
            />

            <img
              src={InteractiveMobile}
              alt="Interactive VR"
              className="w-full lg:w-2/3"
            />
          </picture>

          <article
            className="
              bg-white
              pt-12

              lg:absolute
              lg:bottom-0
              lg:right-0
              lg:max-w-xl
              lg:pl-24
            "
          >
            <h2
              className="
                text-center
                text-4xl
                font-light
                uppercase
                leading-tight

                lg:text-left
                lg:text-5xl
              "
            >
              The leader in
              <br />
              interactive VR
            </h2>

            <p
              className="
                mt-8
                text-center
                leading-8
                text-zinc-500

                lg:text-left
              "
            >
              Founded in 2011, Loopstudios has been producing
              world-class virtual reality projects for some of
              the best companies around the globe. Our
              award-winning creations have transformed
              businesses through digital experiences that bind
              to their brand.
            </p>
          </article>
        </div>
      </section>

      {/* CREATIONS */}

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="flex items-center justify-between">
          <h2
            className="
              text-4xl
              font-light
              uppercase
            "
          >
            Our Creations
          </h2>

          <button
            className="
              hidden
              border
              border-black
              px-10
              py-3
              text-sm
              uppercase
              tracking-[0.3em]
              transition
              hover:bg-black
              hover:text-white
              lg:block
            "
          >
            See All
          </button>
        </div>

        <div
          className="
            mt-16
            grid
            gap-8

            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {creations.map((creation) => (
            <article
              key={creation.title}
              className="
                group
                relative
                cursor-pointer
                overflow-hidden
              "
            >
              <picture>
                <source
                  media="(min-width:1024px)"
                  srcSet={creation.desktop}
                />

                <img
                  src={creation.mobile}
                  alt={creation.title}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />
              </picture>

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/80
                  via-black/20
                  to-transparent

                  transition
                  group-hover:bg-white/60
                "
              />

              <h3
                className="
                  absolute
                  bottom-8
                  left-8

                  max-w-[10rem]

                  text-4xl
                  font-light
                  uppercase
                  leading-none
                  text-white

                  transition
                  group-hover:text-black
                "
              >
                {creation.title}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <button
            className="
              border
              border-black
              px-10
              py-3
              text-sm
              uppercase
              tracking-[0.3em]
              transition
              hover:bg-black
              hover:text-white
            "
          >
            See All
          </button>
        </div>
      </section>
    </main>
  );
}
