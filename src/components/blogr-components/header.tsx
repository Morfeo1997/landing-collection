import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import Logo from "../../assets/icons/blogr/logo.svg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    {
      label: "Product",
      href: "#",
    },
    {
      label: "Company",
      href: "#",
    },
    {
      label: "Connect",
      href: "#",
    },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}

        <a href="/" className="shrink-0">
          <img src={Logo} alt="Blogr" className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}

        <div className="hidden flex-1 items-center justify-between pl-16 md:flex">
          <nav className="flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.label}
                className="
                  group
                  flex
                  items-center
                  gap-1
                  text-sm
                  font-semibold
                  text-white/80
                  transition
                  hover:text-white
                "
              >
                {item.label}

                <ChevronDown
                  size={16}
                  className="transition group-hover:rotate-180"
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-8">
            <button
              className="
                text-sm
                font-semibold
                text-white
                transition
                hover:opacity-80
              "
            >
              Login
            </button>

            <button
              className="
                rounded-full
                bg-white
                px-9
                py-3
                text-sm
                font-semibold
                text-blogr-Red-500
                transition
                hover:bg-blogr-Red-400
                hover:text-white
              "
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? (
            <X size={30} />
          ) : (
            <Menu size={30} />
          )}
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
          overflow-hidden
          rounded-lg
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
        <nav className="flex flex-col px-8 py-8">
          {navigation.map((item) => (
            <button
              key={item.label}
              className="
                flex
                items-center
                justify-center
                gap-2
                py-4
                text-lg
                font-semibold
                text-blogr-Blue-900
              "
            >
              {item.label}

              <ChevronDown
                size={18}
                className="text-blogr-Red-500"
              />
            </button>
          ))}

          <hr className="my-6 border-gray-200" />

          <button
            className="
              py-3
              text-lg
              font-semibold
              text-blogr-dark-blue
            "
          >
            Login
          </button>

          <button
            className="
              mx-auto
              mt-4
              rounded-full
              bg-gradient-to-r
              from-blogr-Red-400
              to-blogr-Red-500
              px-10
              py-3
              font-semibold
              text-white
            "
          >
            Sign Up
          </button>
        </nav>
      </div>
    </header>
  );
}
