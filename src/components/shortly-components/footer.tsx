import Logo from "../../assets/icons/shortly/logo.svg";

import Facebook from "../../assets/icons/shortly/icon-facebook.svg";
import Twitter from "../../assets/icons/shortly/icon-twitter.svg";
import Pinterest from "../../assets/icons/shortly/icon-pinterest.svg";
import Instagram from "../../assets/icons/shortly/icon-instagram.svg";

const footerLinks = {
  Features: [
    "Link Shortening",
    "Branded Links",
    "Analytics",
  ],
  Resources: [
    "Blog",
    "Developers",
    "Support",
  ],
  Company: [
    "About",
    "Our Team",
    "Careers",
    "Contact",
  ],
};

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    alt: "Facebook",
  },
  {
    icon: Twitter,
    href: "#",
    alt: "Twitter",
  },
  {
    icon: Pinterest,
    href: "#",
    alt: "Pinterest",
  },
  {
    icon: Instagram,
    href: "#",
    alt: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#232127]">
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-14
          px-6
          py-16

          lg:flex-row
          lg:items-start
          lg:justify-between
        "
      >
        {/* Logo */}

        <div className="shrink-0">
          <img
            src={Logo}
            alt="Shortly"
            className="w-32"
          />
        </div>

        {/* Navigation */}

        <div
          className="
            grid
            gap-12
            text-center

            md:grid-cols-3

            lg:text-left
          "
        >
          {Object.entries(footerLinks).map(
            ([title, links]) => (
              <div key={title}>
                <h3
                  className="
                    mb-6
                    text-base
                    font-bold
                    text-white
                  "
                >
                  {title}
                </h3>

                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="
                          text-sm
                          text-gray-400
                          transition-colors
                          duration-300
                          hover:text-cyan-400
                        "
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Social */}

        <div className="flex items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              aria-label={social.alt}
            >
              <img
                src={social.icon}
                alt={social.alt}
                className="
                  fill-white hover:fill-blue-500 transition-colors
                "
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
