import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../../assets/icons/digitalbank/logo-dark.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <a href="/" className="shrink-0">
          <img
            src={Logo}
            alt="Digitalbank"
            className="h-5 w-auto md:h-6"
          />
        </a>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative
                py-8
                text-sm
                font-medium
                text-digitalbank-grayish-blue
                transition
                hover:text-digitalbank-dark-blue

                after:absolute
                after:bottom-0
                after:left-0
                after:h-1
                after:w-0
                after:rounded-full
                after:bg-gradient-to-r
                after:from-digitalbank-lime
                after:to-digitalbank-cyan
                after:transition-all

                hover:after:w-full
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}

        <button
          className="
            hidden
            rounded-full
            bg-gradient-to-r
            from-digitalbank-lime
            to-digitalbank-cyan
            px-8
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:opacity-70
            md:block
          "
        >
          Request Invite
        </button>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-digitalbank-grayish-blue md:hidden"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`
          absolute
          left-6
          right-6
          top-24
          origin-top
          rounded-md
          bg-white
          shadow-2xl
          transition-all
          duration-300

          ${
            isOpen
              ? "scale-y-100 opacity-100"
              : "pointer-events-none scale-y-95 opacity-0"
          }
        `}
      >
        <nav className="flex flex-col items-center gap-6 px-8 py-8">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                text-lg
                font-medium
                text-digitalbank-dark-blue
                transition
                hover:text-digitalbank-lime
              "
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
