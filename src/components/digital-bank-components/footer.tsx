import Logo from "../../assets/icons/digitalbank/logo-white.svg";

import FacebookIcon from "../../assets/icons/digitalbank/icon-facebook.svg";
import YoutubeIcon from "../../assets/icons/digitalbank/icon-youtube.svg";
import TwitterIcon from "../../assets/icons/digitalbank/icon-twitter.svg";
import PinterestIcon from "../../assets/icons/digitalbank/icon-pinterest.svg";
import InstagramIcon from "../../assets/icons/digitalbank/icon-instagram.svg";

export default function Footer() {
  const navigation = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
  ];

  const socials = [
    {
      icon: FacebookIcon,
      alt: "Facebook",
    },
    {
      icon: YoutubeIcon,
      alt: "YouTube",
    },
    {
      icon: TwitterIcon,
      alt: "Twitter",
    },
    {
      icon: PinterestIcon,
      alt: "Pinterest",
    },
    {
      icon: InstagramIcon,
      alt: "Instagram",
    },
  ];

  return (
    <footer className="bg-digitalbank-footer py-16">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-12
          px-6

          lg:flex-row
          lg:items-start
          lg:justify-between
          lg:px-8
        "
      >
        {/* ========================= */}
        {/* Logo + Social */}
        {/* ========================= */}

        <div className="flex flex-col items-center lg:items-start">
          <img
            src={Logo}
            alt="Digitalbank"
            className="h-6 w-auto"
          />

          <div className="mt-10 flex gap-4">
            {socials.map((social) => (
              <a
                key={social.alt}
                href="#"
                className="transition hover:opacity-70"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="h-5 w-5"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ========================= */}
        {/* Navigation */}
        {/* ========================= */}

        <nav
          className="
            grid
            gap-4
            text-center

            md:grid-cols-2
            md:gap-x-24

            lg:text-left
          "
        >
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="
                text-white
                transition
                hover:text-digitalbank-lime
              "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* ========================= */}
        {/* CTA */}
        {/* ========================= */}

        <div className="flex flex-col items-center lg:items-end">
          <button
            className="
              rounded-full
              bg-gradient-to-r
              from-digitalbank-lime
              to-digitalbank-cyan
              px-8
              py-3
              font-semibold
              text-white
              transition
              hover:opacity-70
            "
          >
            Request Invite
          </button>

          <p
            className="
              mt-8
              text-sm
              text-digitalbank-grayish-blue
            "
          >
            © Digitalbank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
