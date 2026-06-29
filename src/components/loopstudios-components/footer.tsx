import Logo from "../../assets/icons/loopstudios/logo.svg";

import IconFacebook from "../../assets/icons/loopstudios/icon-facebook.svg";
import IconTwitter from "../../assets/icons/loopstudios/icon-twitter.svg";
import IconPinterest from "../../assets/icons/loopstudios/icon-pinterest.svg";
import IconInstagram from "../../assets/icons/loopstudios/icon-instagram.svg";

const links = ["About", "Careers", "Events", "Products", "Support"];

const socialLinks = [
  {
    icon: IconFacebook,
    href: "#",
    alt: "Facebook",
  },
  {
    icon: IconTwitter,
    href: "#",
    alt: "Twitter",
  },
  {
    icon: IconPinterest,
    href: "#",
    alt: "Pinterest",
  },
  {
    icon: IconInstagram,
    href: "#",
    alt: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-12
          px-6
          py-16

          lg:flex-row
          lg:items-start
          lg:justify-between
        "
      >
        {/* Logo + Social */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-10

            lg:items-start
            lg:justify-between
            lg:h-40
          "
        >
          <img src={Logo} alt="Loopstudios" className="w-44" />

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.alt}
                href={social.href}
                className="
                  group
                  relative
                "
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="transition duration-300 group-hover:opacity-70"
                />

                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-[2px]
                    w-0
                    -translate-x-1/2
                    bg-white
                    transition-all
                    duration-300
                    group-hover:w-6
                  "
                />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}

        <nav>
          <ul
            className="
              flex
              flex-col
              items-center
              gap-6

              lg:grid
              lg:grid-cols-2
              lg:gap-x-20
              lg:gap-y-5
              lg:items-start
            "
          >
            {links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="
                    text-sm
                    transition-colors
                    hover:text-zinc-400
                  "
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Copyright */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-8

            lg:items-end
            lg:justify-between
            lg:h-40
          "
        >
          {/* Espaciador para igualar el diseño desktop */}
          <div />

          <p
            className="
              text-center
              text-sm
              text-zinc-500

              lg:text-right
            "
          >
            © 2021 Loopstudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
