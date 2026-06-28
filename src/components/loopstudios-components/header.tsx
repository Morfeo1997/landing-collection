import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../../assets/icons/loopstudios/logo.svg";

const links = [
  "About",
  "Careers",
  "Events",
  "Products",
  "Support",
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-10 lg:px-10">
          <img
            src={Logo}
            alt="Loopstudios"
            className="w-36 lg:w-48"
          />

          {/* Desktop */}

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                className="group relative text-sm font-medium text-white"
              >
                {link}

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
          </nav>

          {/* Mobile */}

          <button
            onClick={() => setOpen(true)}
            className="text-white lg:hidden"
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`
          fixed inset-0 z-[100]
          bg-black
          transition-all
          duration-500
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between p-6">
          <img src={Logo} alt="Loopstudios" className="w-36" />

          <button
            onClick={() => setOpen(false)}
            className="text-white"
          >
            <X size={30} />
          </button>
        </div>

        <nav className="mt-28 flex flex-col gap-8 px-6">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="
                text-3xl
                uppercase
                tracking-wider
                text-white
              "
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
