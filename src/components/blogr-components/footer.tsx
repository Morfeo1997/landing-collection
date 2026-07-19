import Logo from "../../assets/icons/blogr/logo.svg";
import Facebook from "../../assets/icons/blogr/icon-facebook.svg";
import Twitter from "../../assets/icons/blogr/icon-twitter.svg";
import Pinterest from "../../assets/icons/blogr/icon-pinterest.svg";
import Instagram from "../../assets/icons/blogr/icon-instagram.svg";

export default function Footer() {
  return (
    <footer
      className="
        rounded-tr-[6rem]
        bg-blogr-Gray-900
        py-20
        text-white
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-14
          px-6

          md:grid-cols-4
          md:items-start
          lg:px-8
        "
      >
        {/* Logo */}

        <div className="flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="Blogr"
            className="h-10 w-auto"
          />
        </div>

        {/* Product */}

        <div className="text-center md:text-left">
          <h3 className="mb-8 font-semibold">Product</h3>

          <ul className="space-y-4 text-white/70">
            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                Overview
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                Pricing
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                Marketplace
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                Features
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}

        <div className="text-center md:text-left">
          <h3 className="mb-8 font-semibold">Company</h3>

          <ul className="space-y-4 text-white/70">
            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                About
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                Team
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                Blog
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}

        <div className="text-center md:text-left">
          <h3 className="mb-8 font-semibold">Connect</h3>

          <ul className="space-y-4 text-white/70">
            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                Newsletter
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>

          {/* Socials */}

          <div className="mt-10 flex justify-center gap-5 md:justify-start">
            <a href="#">
              <img
                src={Facebook}
                alt="Facebook"
                className="transition hover:scale-110"
              />
            </a>

            <a href="#">
              <img
                src={Twitter}
                alt="Twitter"
                className="transition hover:scale-110"
              />
            </a>

            <a href="#">
              <img
                src={Pinterest}
                alt="Pinterest"
                className="transition hover:scale-110"
              />
            </a>

            <a href="#">
              <img
                src={Instagram}
                alt="Instagram"
                className="transition hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
