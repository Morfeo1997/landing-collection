import SnappyIcon from "../../assets/icons/insure/icon-snappy-process.svg";
import AffordableIcon from "../../assets/icons/insure/icon-affordable-prices.svg";
import PeopleIcon from "../../assets/icons/insure/icon-people-first.svg";

interface Card {
  icon: string;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    icon: SnappyIcon,
    title: "Snappy Process",
    description:
      "Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.",
  },
  {
    icon: AffordableIcon,
    title: "Affordable Prices",
    description:
      "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.",
  },
  {
    icon: PeopleIcon,
    title: "People First",
    description:
      "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it.",
  },
];

function Card({
  icon,
  title,
  description,
}: Card) {
  return (
    <article
      className="
        flex
        flex-col
        items-center
        text-center

        md:items-start
        md:text-left
      "
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className="mb-8 h-22 w-22"
      />

      <h3
        className="
          font-serif
          text-4xl
          text-insure-dark-violet
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-5
          max-w-sm
          text-[15px]
          leading-7
          text-insure-gray-blue
        "
      >
        {description}
      </p>
    </article>
  );
}

export default function CardSection() {
  return (
    <section className="bg-white">
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-36
          lg:px-8
        "
      >
        {/* Divider */}

        <div
          className="
            mx-auto
            h-px
            w-40
            bg-gray-300

            md:mx-0
          "
        />

        {/* Heading */}

        <h2
          className="
            mt-12
            text-center
            font-serif
            text-5xl
            text-insure-dark-violet

            md:text-left
            md:text-7xl
          "
        >
          We're different
        </h2>

        {/* Cards */}

        <div
          className="
            mt-20
            grid
            gap-16

            md:grid-cols-3
            md:gap-12
          "
        >
          {cards.map((card) => (
            <Card
              key={card.title}
              {...card}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
