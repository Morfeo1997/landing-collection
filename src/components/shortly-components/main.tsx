import IconBrandRecognition from "../../assets/icons/shortly/icon-brand-recognition.svg";
import IconDetailedRecords from "../../assets/images/shortly/icon-detailed-records.svg";
import IconFullyCustomizable from "../../assets/icons/shortly/icon-fully-customizable.svg";

const cards = [
  {
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
    icon: IconBrandRecognition,
  },
  {
    title: "Detailed Records",
    description:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: IconDetailedRecords,
  },
  {
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: IconFullyCustomizable,
  },
];

export default function Main() {
  return (
    <main className="bg-slate-100 pt-44 pb-32">
      <section className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-4xl font-bold text-[#35323e]">
            Advanced Statistics
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-500">
            Track how your links are performing across the web with
            our advanced statistics dashboard.
          </p>
        </div>

        {/* Cards */}

        <div className="relative mt-28">
          {/* Desktop line */}

          <div
            className="
              absolute
              left-0
              right-0
              top-1/2
              hidden
              h-2
              -translate-y-1/2
              bg-cyan-400
              lg:block
            "
          />

          {/* Mobile line */}

          <div
            className="
              absolute
              left-1/2
              top-0
              bottom-0
              w-2
              -translate-x-1/2
              bg-cyan-400
              lg:hidden
            "
          />

          <div
            className="
              relative
              grid
              gap-24

              lg:grid-cols-3
              lg:gap-8
            "
          >
            {cards.map((card, index) => (
              <article
                key={card.title}
                className={`
                  relative rounded-lg bg-white px-8 pb-10 pt-20 shadow-sm

                  ${
                    index === 1
                      ? "lg:translate-y-10"
                      : ""
                  }

                  ${
                    index === 2
                      ? "lg:translate-y-20"
                      : ""
                  }
                `}
              >
                {/* Icon */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    flex
                    h-22
                    w-22
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-[#3b3054]

                    lg:left-8
                    lg:translate-x-0
                  "
                >
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-10"
                  />
                </div>

                <h3
                  className="
                    text-center
                    text-2xl
                    font-bold
                    text-[#35323e]

                    lg:text-left
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-6
                    text-center
                    leading-8
                    text-gray-500

                    lg:text-left
                  "
                >
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
