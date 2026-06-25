import { useState } from "react";
import { Menu } from "lucide-react";

import Logo from "@/assets/logo.svg";

import HeroIllustration from "@/assets/illustration-intro.svg";

import AvatarAli from "@/assets/avatar-ali.png";
import AvatarAnisha from "@/assets/avatar-anisha.png";
import AvatarRichard from "@/assets/avatar-richard.png";

import BgDesktop from "@/assets/bg-tablet-pattern.svg";
import BgMobile from "@/assets/bg-tablet-pattern.svg";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const testimonials = [
    {
      image: AvatarAnisha,
      name: "Anisha Li",
      text: `Manage has supercharged our team's workflow.
      The ability to maintain visibility on larger milestones
      at all times keeps everyone motivated.`,
    },
    {
      image: AvatarAli,
      name: "Ali Bravo",
      text: `We have been able to cancel so many other
      subscriptions since using Manage. There is no more
      cross-channel confusion and everyone is much more focused.`,
    },
    {
      image: AvatarRichard,
      name: "Richard Watts",
      text: `Manage allows us to provide structure and
      process. It keeps us organized and focused.`,
    },
  ];

  const features = [
    {
      id: "01",
      title: "Track company-wide progress",
      description:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest details.",
    },
    {
      id: "02",
      title: "Advanced built-in reports",
      description:
        "Set internal delivery estimates and track progress toward company goals. Our dashboard helps you build the reports you need.",
    },
    {
      id: "03",
      title: "Everything you need in one place",
      description:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents.",
    },
  ];

  return (
    <main className="relative overflow-hidden">
      {/* Background Decorations */}

      <img
        src={BgDesktop}
        alt=""
        className="
          absolute
          -top-40
          -right-40
          hidden
          lg:block
          pointer-events-none
          z-0
        "
      />

      <img
        src={BgMobile}
        alt=""
        className="
          absolute
          top-0
          right-0
          lg:hidden
          pointer-events-none
          z-0
        "
      />

      {/* NAVBAR */}

      <header className="relative z-20">
        <div
          className="
            mx-auto
            max-w-7xl
            px-6
            py-10
            flex
            items-center
            justify-between
          "
        >
          <img src={Logo} alt="Manage" />

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </nav>

          <button
            className="
              hidden
              md:inline-flex
              bg-orange-500
              text-white
              px-7
              py-3
              rounded-full
              font-medium
              shadow-lg
              shadow-orange-500/30
            "
          >
            Get Started
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            <Menu size={32} />
          </button>
        </div>

        {isOpen && (
          <div
            className="
              md:hidden
              mx-6
              rounded-lg
              bg-white
              p-8
              text-center
              shadow-xl
            "
          >
            <div className="space-y-4 font-semibold">
              <a href="#" className="block">
                Pricing
              </a>
              <a href="#" className="block">
                Product
              </a>
              <a href="#" className="block">
                About Us
              </a>
              <a href="#" className="block">
                Careers
              </a>
              <a href="#" className="block">
                Community
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}

      <section
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-10
          lg:py-20
        "
      >
        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >
          <div className="order-2 lg:order-1">
            <h1
              className="
                max-w-xl
                text-4xl
                font-bold
                leading-tight
                text-slate-900
                lg:text-6xl
              "
            >
              Bring everyone together to build better products.
            </h1>

            <p
              className="
                mt-6
                max-w-md
                text-slate-400
                leading-8
              "
            >
              Manage makes it simple for software teams
              to plan day-to-day tasks while keeping the
              larger team goals in view.
            </p>

            <button
              className="
                mt-8
                rounded-full
                bg-orange-500
                px-8
                py-3
                font-medium
                text-white
                shadow-lg
                shadow-orange-500/30
              "
            >
              Get Started
            </button>
          </div>

          <div className="order-1 lg:order-2">
            <img
              src={HeroIllustration}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        className="
          mx-auto
          max-w-7xl
          px-6
          py-20
        "
      >
        <div
          className="
            grid
            gap-16
            lg:grid-cols-2
          "
        >
          <div>
            <h2
              className="
                text-4xl
                font-bold
                text-slate-900
              "
            >
              What's different about Manage?
            </h2>

            <p
              className="
                mt-6
                max-w-md
                leading-8
                text-slate-400
              "
            >
              Manage provides all the functionality your
              team needs, without the complexity.
            </p>
          </div>

          <div className="space-y-12">
            {features.map((feature) => (
              <article key={feature.id}>
                <div className="flex items-center">
                  <span
                    className="
                      rounded-full
                      bg-orange-500
                      px-6
                      py-2
                      text-sm
                      font-bold
                      text-white
                    "
                  >
                    {feature.id}
                  </span>

                  <h3
                    className="
                      ml-4
                      font-bold
                      text-slate-800
                    "
                  >
                    {feature.title}
                  </h3>
                </div>

                <p
                  className="
                    mt-4
                    pl-0
                    text-slate-400
                    leading-8
                    lg:pl-24
                  "
                >
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}

      <section className="py-24">
        <div className="text-center">
          <h2
            className="
              text-4xl
              font-bold
              text-slate-900
            "
          >
            What they've said
          </h2>
        </div>

        <div
          className="
            mx-auto
            mt-24
            max-w-7xl
            px-6
            grid
            gap-8
            md:grid-cols-3
          "
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="
                relative
                bg-slate-50
                px-8
                pt-16
                pb-8
                text-center
              "
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="
                  absolute
                  left-1/2
                  top-0
                  h-20
                  w-20
                  -translate-x-1/2
                  -translate-y-1/2
                "
              />

              <h3 className="font-bold text-slate-800">
                {testimonial.name}
              </h3>

              <p
                className="
                  mt-4
                  text-slate-400
                  leading-8
                "
              >
                {testimonial.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            className="
              rounded-full
              bg-orange-500
              px-8
              py-3
              text-white
              shadow-lg
              shadow-orange-500/30
            "
          >
            Get Started
          </button>
        </div>
      </section>
    </main>
  );
}
