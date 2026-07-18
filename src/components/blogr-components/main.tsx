import EditorDesktop from "../../assets/images/blogr/illustration-editor-desktop.svg";
import EditorMobile from "../../assets/images/blogr/illustration-editor-mobile.svg";

import PhonesIllustration from "../../assets/images/blogr/illustration-phones.svg";

import LaptopDesktop from "../../assets/images/blogr/illustration-laptop-desktop.svg";
import LaptopMobile from "../../assets/images/blogr/illustration-laptop-mobile.svg";

import CirclesPattern from "../../assets/bg/blogr/bg-pattern-circles.svg";

export default function Main() {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* ========================================================= */}
      {/* Future Section */}
      {/* ========================================================= */}

      <section className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
        <h2 className="mb-20 text-center text-4xl font-semibold text-blogr-Blue-900 md:text-5xl">
          Designed for the future
        </h2>

        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Mobile Illustration */}

          <img
            src={EditorMobile}
            alt="Editor illustration"
            className="mx-auto w-full max-w-md lg:hidden"
          />

          {/* Text */}

          <div className="order-2 space-y-14 text-center lg:order-1 lg:text-left">
            <article>
              <h3 className="mb-6 text-3xl font-semibold text-blogr-Blue-900">
                Introducing an extensible editor
              </h3>

              <p className="leading-8 text-blogr-Gray-600">
                Blogr features an exceedingly intuitive interface which lets
                you focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </article>

            <article>
              <h3 className="mb-6 text-3xl font-semibold text-blogr-Blue-900">
                Robust content management
              </h3>

              <p className="leading-8 text-blogr-Gray-600">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you're in full control.
              </p>
            </article>
          </div>

          {/* Desktop Illustration */}

          <div className="relative hidden justify-end lg:flex">
            <img
              src={EditorDesktop}
              alt="Editor illustration"
              className="max-w-none translate-x-44"
            />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Infrastructure */}
      {/* ========================================================= */}

      <section className="relative my-32">
        <div
          className="
            relative
            overflow-hidden
            rounded-tr-[6rem]
            rounded-bl-[6rem]
            bg-blogr-Gray-900
          "
        >
          {/* Pattern */}

          <img
            src={CirclesPattern}
            alt=""
            aria-hidden="true"
            className="
              absolute
              -top-64
              left-1/2
              w-[700px]
              -translate-x-1/2
              md:left-0
              md:w-[900px]
              md:translate-x-[-20%]
            "
          />

          <div
            className="
              relative
              mx-auto
              grid
              max-w-7xl
              items-center
              gap-10
              px-6
              py-24
              lg:grid-cols-2
              lg:px-8
            "
          >
            {/* Phones */}

            <div className="relative">
              <img
                src={PhonesIllustration}
                alt="Phones"
                className="
                  mx-auto
                  -mt-52
                  w-full
                  max-w-md

                  lg:-my-32
                "
              />
            </div>

            {/* Text */}

            <div className="pb-8 text-center lg:pb-0 lg:text-left">
              <h2 className="mb-8 text-4xl font-semibold text-white">
                State of the Art Infrastructure
              </h2>

              <p className="leading-8 text-white/80">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Laptop Section */}
      {/* ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Desktop */}

          <div className="hidden lg:block">
            <img
              src={LaptopDesktop}
              alt="Laptop illustration"
              className="max-w-none -translate-x-72"
            />
          </div>

          {/* Mobile */}

          <img
            src={LaptopMobile}
            alt="Laptop illustration"
            className="mx-auto w-full max-w-md lg:hidden"
          />

          {/* Text */}

          <div className="space-y-16 text-center lg:text-left">
            <article>
              <h3 className="mb-6 text-3xl font-semibold text-blogr-Blue-900">
                Free, open, simple
              </h3>

              <p className="leading-8 text-blogr-Gray-600">
                Blogr is a free and open source application backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analytics. The architecture is clean and is relatively easy to
                learn.
              </p>
            </article>

            <article>
              <h3 className="mb-6 text-3xl font-semibold text-blogr-Blue-900">
                Powerful tooling
              </h3>

              <p className="leading-8 text-blogr-Gray-600">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
