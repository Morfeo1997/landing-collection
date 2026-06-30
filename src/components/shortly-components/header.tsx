import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../../assets/icons/shortly/logo.svg";

const navLinks = [
  "Features",
  "Pricing",
  "Resources",
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10">
          {/* Logo + Desktop Nav */}

          <div className="flex items-center gap-12">
            <img
              src={Logo}
              alt="Shortly"
              className="w-30"
            />

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="
                    text-sm
                    font-semibold
                    text-gray-400
                    transition-colors
                    hover:text-gray-900
                  "
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop Actions */}

          <div className="hidden md:flex items-center gap-8">
            <button
              className="
                text-sm
                font-semibold
                text-gray-400
                transition-colors
                hover:text-gray-900
              "
            >
              Login
            </button>

            <button
              className="
                rounded-full
                bg-cyan-400
                px-7
                py-3
                text-sm
                font-bold
                text-white
                transition-all
                hover:bg-cyan-300
              "
            >
              Sign Up
            </button>
          </div>

          {/* Mobile */}

          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-500 md:hidden"
          >
            <Menu size={34} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`
          fixed inset-0 z-[100] bg-black/40 transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        <div
          className={`
            absolute left-6 right-6 top-28 rounded-xl
            bg-violet-900 p-8 text-center
            transition-all duration-300

            ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-6 opacity-0"
            }
          `}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 text-white"
          >
            <X size={24} />
          </button>

          <nav className="mt-6 flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="
                  text-lg
                  font-bold
                  text-white
                "
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>

          <hr className="my-8 border-white/20" />

          <button
            className="
              w-full
              text-lg
              font-bold
              text-white
            "
          >
            Login
          </button>

          <button
            className="
              mt-8
              w-full
              rounded-full
              bg-cyan-400
              py-4
              text-lg
              font-bold
              text-white
              transition
              hover:bg-cyan-300
            "
          >
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
