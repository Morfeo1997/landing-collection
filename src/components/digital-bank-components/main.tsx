import OnlineBankingIcon from "../../assets/icons/digitalbank/icon-online.svg";
import BudgetingIcon from "../../assets/icons/digitalbank/icon-budgeting.svg";
import OnboardingIcon from "../../assets/icons/digitalbank/icon-onboarding.svg";
import ApiIcon from "../../assets/icons/digitalbank/icon-api.svg";

import CurrencyImage from "../../assets/images/digitalbank/image-currency.jpg";
import RestaurantImage from "../../assets/images/digitalbank/image-restaurant.jpg";
import PlaneImage from "../../assets/images/digitalbank/image-plane.jpg";
import ConfettiImage from "../../assets/images/digitalbank/image-confetti.jpg";

const features = [
  {
    icon: OnlineBankingIcon,
    title: "Online Banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: BudgetingIcon,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
  },
  {
    icon: OnboardingIcon,
    title: "Fast Onboarding",
    description:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: ApiIcon,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const articles = [
  {
    image: CurrencyImage,
    author: "By Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    image: RestaurantImage,
    author: "By Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },
  {
    image: PlaneImage,
    author: "By Wilson Hutton",
    title: "Take your Digitalbank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even...",
  },
  {
    image: ConfettiImage,
    author: "By Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    description:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through...",
  },
];

export default function Main() {
  return (
    <main>
      {/* ====================================================== */}
      {/* WHY CHOOSE */}
      {/* ====================================================== */}

      <section className="bg-digitalbank-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl font-light text-digitalBank-Blue-950">
              Why choose Digitalbank?
            </h2>

            <p className="mt-6 text-lg leading-8 text-digitalBank-Gray-600">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>

          <div className="mt-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="text-center md:text-left"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="mx-auto h-18 w-18 md:mx-0"
                />

                <h3 className="mt-10 text-3xl font-light text-digitalBank-Blue-950">
                  {feature.title}
                </h3>

                <p className="mt-6 leading-8 text-digitalBank-Gray-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================== */}
      {/* ARTICLES */}
      {/* ====================================================== */}

      <section className="bg-digitalbank-very-light-gray py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-4xl font-light text-digitalBank-Blue-950 md:text-left">
            Latest Articles
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => (
              <article
                key={article.title}
                className="
                  overflow-hidden
                  rounded-md
                  bg-white
                  shadow-sm
                  transition
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-7">
                  <p className="text-xs text-digitalBank-Gray-600">
                    {article.author}
                  </p>

                  <h3
                    className="
                      mt-4
                      text-xl
                      font-light
                      text-digitalBank-Blue-950
                      transition
                      hover:text-digitalBank-Green-500
                    "
                  >
                    <a href="#">{article.title}</a>
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-digitalBank-Gray-600">
                    {article.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
