import {
  Facebook,
  Youtube,
  Twitter,
  Instagram,
} from "lucide-react";

import Logo from "@/assets/logo-white.svg";
import IconPinterest from "@/assets/icon-pinterest.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-14
          px-6
          py-16
          lg:grid-cols-[240px_1fr_320px]
        "
      >
        {/* Logo + Social */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-10
            lg:items-start
          "
        >
          <img src={Logo} alt="Manage" className="w-40" />

          <div className="flex gap-5">
            <Facebook
              className="cursor-pointer transition hover:text-orange-500"
              size={22}
            />

            <Youtube
              className="cursor-pointer transition hover:text-orange-500"
              size={22}
            />

            <Twitter
              className="cursor-pointer transition hover:text-orange-500"
              size={22}
            />

            <img
              src={IconPinterest}
              alt="Pinterest"
              className="cursor-pointer transition hover:opacity-70"
            />

            <Instagram
              className="cursor-pointer transition hover:text-orange-500"
              size={22}
            />
          </div>
        </div>

        {/* Links */}

        <div
          className="
            grid
            grid-cols-2
            justify-items-center
            gap-10
            text-sm
            lg:justify-items-start
          "
        >
          <ul className="space-y-4">
            <li>
              <a className="hover:text-orange-500" href="#">
                Home
              </a>
            </li>

            <li>
              <a className="hover:text-orange-500" href="#">
                Pricing
              </a>
            </li>

            <li>
              <a className="hover:text-orange-500" href="#">
                Products
              </a>
            </li>

            <li>
              <a className="hover:text-orange-500" href="#">
                About Us
              </a>
            </li>
          </ul>

          <ul className="space-y-4">
            <li>
              <a className="hover:text-orange-500" href="#">
                Careers
              </a>
            </li>

            <li>
              <a className="hover:text-orange-500" href="#">
                Community
              </a>
            </li>

            <li>
              <a className="hover:text-orange-500" href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}

        <div
          className="
            flex
            flex-col
            items-center
            gap-8
            lg:items-end
          "
        >
          <form className="flex w-full gap-4">
            <input
              type="email"
              placeholder="Updates in your inbox..."
              className="
                flex-1
                rounded-full
                bg-white
                px-5
                py-3
                text-sm
                text-slate-800
                outline-none
              "
            />

            <button
              className="
                rounded-full
                bg-orange-500
                px-8
                font-semibold
                transition
                hover:bg-orange-400
              "
            >
              Go
            </button>
          </form>

          <p
            className="
              text-center
              text-sm
              text-slate-400
              lg:text-right
            "
          >
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
