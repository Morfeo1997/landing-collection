import Logo from "../../assets/icons/digitalbank/logo-light.svg";

export default function Footer() {
  const navigation = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
  ];


  return (
    <footer className="bg-digitalBank-Blue-950 py-16">
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
            {/*
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
              */}
              <a href="#" className="fill-white hover:fill-digitalBank-Green-500 transition-colors duration-200">
                <svg width="24" height="24" ><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill-rule="nonzero"/></svg>
              </a>
              <a href="#" className="fill-white hover:fill-digitalBank-Green-500 transition-colors duration-200">
                <svg width="21" height="20"><path d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"/></svg>
              </a>
              <a href="#" className="fill-white hover:fill-digitalBank-Green-500 transition-colors duration-200">
                <svg width="21" height="18"><path d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"/></svg>
              </a>
              <a href="#" className="fill-white hover:fill-digitalBank-Green-500 transition-colors duration-200">
                <svg width="20" height="20"><path d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"/></svg>
              </a>
              <a href="#" className="fill-white hover:fill-digitalBank-Green-500 transition-colors duration-200">
                <svg width="21" height="20"><path d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"/></svg>
              </a>
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
                hover:text-digitalBank-Green-500
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
              bg-linear-to-r
              from-digitalBank-Green-500
              to-digitalBank-Cyan-400
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
              text-digitalBank-Gray-600
            "
          >
            © Digitalbank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
