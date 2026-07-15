import Logo from "../../assets/icons/insure/logo.svg";

import FacebookIcon from "../../assets/icons/insure/icon-facebook.svg";
import TwitterIcon from "../../assets/icons/insure/icon-twitter.svg";
import PinterestIcon from "../../assets/icons/insure/icon-pinterest.svg";
import InstagramIcon from "../../assets/icons/insure/icon-instagram.svg";

import PatternDesktop from "../../assets/images/insure/bg-pattern-footer-desktop.svg";
import PatternMobile from "../../assets/images/insure/bg-pattern-footer-mobile.svg";

const footerLinks = [
  {
    title: "Our Company",
    links: [
      "How We Work",
      "Why Insure?",
      "Check Price",
      "Reviews",
    ],
  },
  {
    title: "Help Me",
    links: [
      "FAQ",
      "Terms of Use",
      "Privacy Policy",
      "Cookies",
    ],
  },
  {
    title: "Contact",
    links: [
      "Sales",
      "Support",
      "Live Chat",
    ],
  },
  {
    title: "Others",
    links: [
      "Careers",
      "Press",
      "Licenses",
    ],
  },
];

const socialLinks = [
  {
    icon: FacebookIcon,
    href: "#",
    label: "Facebook",
  },
  {
    icon: TwitterIcon,
    href: "#",
    label: "Twitter",
  },
  {
    icon: PinterestIcon,
    href: "#",
    label: "Pinterest",
  },
  {
    icon: InstagramIcon,
    href: "#",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-insure-light-gray">
      {/* Background Pattern */}

      <img
        src={PatternDesktop}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 hidden select-none md:block"
      />

      <img
        src={PatternMobile}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 select-none md:hidden"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Top */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-10
            border-b
            border-gray-300
            pb-10

            md:flex-row
            md:justify-between
          "
        >
          <img
            src={Logo}
            alt="Insure"
            className="h-8 w-auto"
          />

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="transition hover:opacity-70"
              >
                <img
                  src={social.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-6 w-6"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}

        <div
          className="
            mt-12
            grid
            gap-12
            text-center

            md:grid-cols-4
            md:text-left
          "
        >
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3
                className="
                  mb-8
                  text-sm
                  font-bold
                  uppercase
                  tracking-[0.18rem]
                  text-insure-gray-blue
                "
              >
                {section.title}
              </h3>

              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.12rem]
                        text-insure-dark-violet
                        transition
                        hover:underline
                      "
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
