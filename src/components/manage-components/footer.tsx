import Logo from "../../assets/icons/manage/logo.svg";
import IconPinterest from "../../assets/icons/manage/icon-pinterest.svg";
import Twitter from "../../assets/icons/manage/icon-twitter.svg";
import Facebook from "../../assets/icons/manage/icon-facebook.svg";
import Youtube from "../../assets/icons/manage/icon-youtube.svg";
import Instagram from "../../assets/icons/manage/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="bg-manage-gray-strong text-white">
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
            <img
              src={Facebook}
              alt="Facebook"
              className="cursor-pointer transition hover:opacity-70"
            />

            <img
              src={Youtube}
              alt="Youtube"
              className="cursor-pointer transition hover:opacity-70"
            />

            <img 
              src={Twitter}
              alt="Twitter"
              className="cursor-pointer transition hover:opacity-50"
            />

            <img
              src={IconPinterest}
              alt="Pinterest"
              className="cursor-pointer transition hover:opacity-70"
            />

            <img
              src={Instagram}
              alt="Instagram"
              className="cursor-pointer transition hover:opacity-70"
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
              <a className="hover:text-manage-orange-strong" href="#">
                Home
              </a>
            </li>

            <li>
              <a className="hover:text-manage-orange-strong" href="#">
                Pricing
              </a>
            </li>

            <li>
              <a className="hover:text-manage-orange-strong" href="#">
                Products
              </a>
            </li>

            <li>
              <a className="hover:text-manage-orange-strong" href="#">
                About Us
              </a>
            </li>
          </ul>

          <ul className="space-y-4">
            <li>
              <a className="hover:text-manage-orange-strong" href="#">
                Careers
              </a>
            </li>

            <li>
              <a className="hover:text-manage-orange-strong" href="#">
                Community
              </a>
            </li>

            <li>
              <a className="hover:text-manage-orange-strong" href="#">
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
          <form className="flex w-full  gap-4">
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
                text-manage-blue
                outline-none
              "
            />

            <button
              className="
                rounded-full
                bg--manage-orange-strong
                px-4
                md:px-8
                font-semibold
                transition
                hover:bg-manage-orange-strong
              "
            >
              Go
            </button>
          </form>

          <p
            className="
              text-center
              text-sm
              text-manage-gray-light
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
