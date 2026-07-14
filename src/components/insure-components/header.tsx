import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../../assets/icons/insure/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "How We Work", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Account", href: "#" },
  ];

  return (
    <header className="relative z-50 bg-white">
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-8
        "
      >
        {/* Logo */}

        <a href="/">
          <img src={Logo} alt="Insure" />
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15rem]
                text-insure-gray-blue
                transition-colors
                hover:text-insure-dark-violet
              "
            >
              {link.label}
            </a>
          ))}

          <button
            className="
              border-2
              border-insure-dark-violet
              px-7
              py-3
              text-xs
              font-bold
              uppercase
              tracking-[0.15rem]
              text-insure-dark-violet
              transition
              hover:bg-insure-dark-violet
              hover:text-white
            "
          >
            View Plans
          </button>
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            border-2
            border-insure-dark-violet
            md:hidden
          "
        >
          {isOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`
          absolute
          left-0
          top-full
          w-full
          overflow-hidden
          bg-insure-dark-violet
          transition-all
          duration-300

          ${
            isOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav
          className="
            flex
            flex-col
            items-center
            gap-8
            px-6
            py-12
          "
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                text-xl
                font-medium
                uppercase
                tracking-[0.2rem]
                text-white
              "
            >
              {link.label}
            </a>
          ))}

          <button
            className="
              w-full
              max-w-xs
              border-2
              border-white
              py-4
              text-lg
              font-bold
              uppercase
              tracking-[0.2rem]
              text-white
              transition
              hover:bg-white
              hover:text-insure-dark-violet
            "
          >
            View Plans
          </button>
        </nav>
      </div>
    </header>
  );
}
