import BgDesktop from "../../assets/bg/shortly/bg-shorten-desktop.svg";
import BgMobile from "../../assets/bg/shortly/bg-shorten-mobile.svg";

import { useState } from "react";
import type { FormEvent } from "react";

interface ShortenedLink {
  original: string;
  shortened: string;
}

interface CleanURIResponse {
  result_url?: string;
  error?: string;
}

export default function ShortenerForm() {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState<ShortenedLink[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedLink, setCopiedLink] = useState("");

  async function shortenUrl(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");

    if (!url.trim()) {
      setError("Please add a link");
      return;
    }

    try {
      new URL(url);
    } catch {
      setError("Please enter a valid URL");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://cleanuri.com/api/v1/shorten",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            url: url.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Unable to shorten the URL.");
      }

      const data: CleanURIResponse = await response.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      if (!data.result_url) {
        setError("Unable to shorten the URL.");
        return;
      }

      const newLink: ShortenedLink = {
        original: url.trim(),
        shortened: data.result_url,
      };

      setLinks((prev) => [newLink, ...prev]);

      setUrl("");
    } catch (error) {
      console.error(error);
      setError("Unable to shorten the URL.");
    } finally {
      setLoading(false);
    }
  }

  async function copyLink(link: string) {
    try {
      await navigator.clipboard.writeText(link);

      setCopiedLink(link);

      setTimeout(() => {
        setCopiedLink("");
      }, 2000);
    } catch (error) {
      console.error("Clipboard not available", error);
    }
  }

  return (
    <section className="relative">
      {/* =========================
          Shortener
      ========================== */}

      <div
        className="
          absolute
          bottom-0
          left-1/2
          z-20
          w-full
          max-w-7xl
          -translate-x-1/2
          translate-y-1/2
          px-6
        "
      >
        <div
          className="
            relative
            overflow-hidden
            rounded-xl
            bg-[#3b3054]
            p-6
            md:p-10
          "
        >
          {/* Desktop background */}

          <img
            src={BgDesktop}
            alt=""
            aria-hidden="true"
            className="
              absolute
              inset-0
              hidden
              h-full
              w-full
              object-cover
              md:block
            "
          />

          {/* Mobile background */}

          <img
            src={BgMobile}
            alt=""
            aria-hidden="true"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              md:hidden
            "
          />

          {/* Form */}

          <form
            onSubmit={shortenUrl}
            className="
              relative
              z-10
              flex
              flex-col
              gap-4
              md:flex-row
            "
          >
            <div className="flex-1">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Shorten a link here..."
                disabled={loading}
                className="
                  h-14
                  w-full
                  rounded-lg
                  bg-white
                  px-5
                  text-gray-700
                  outline-none
                  placeholder:text-gray-400
                  disabled:cursor-not-allowed
                  disabled:opacity-70
                "
              />

              {error && (
                <p className="mt-2 text-sm italic text-red-300">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="
                h-14
                rounded-lg
                bg-cyan-400
                px-10
                font-bold
                text-white
                transition
                hover:bg-cyan-300
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading ? "Shortening..." : "Shorten It!"}
            </button>
          </form>
        </div>
      </div>

      {/* =========================
          Shortened links
      ========================== */}

      {links.length > 0 && (
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            px-6
            pb-10
            pt-32
          "
        >
          {links.map((link) => (
            <div
              key={`${link.original}-${link.shortened}`}
              className="
                flex
                flex-col
                gap-4
                rounded-lg
                bg-white
                p-5
                shadow-md
                md:flex-row
                md:items-center
                md:justify-between
              "
            >
              {/* Original URL */}

              <p
                className="
                  max-w-full
                  overflow-hidden
                  text-ellipsis
                  whitespace-nowrap
                  text-gray-700
                  md:max-w-[50%]
                "
              >
                {link.original}
              </p>

              {/* Shortened URL + copy */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  md:flex-row
                  md:items-center
                "
              >
                <a
                  href={link.shortened}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-cyan-500
                    hover:text-cyan-400
                  "
                >
                  {link.shortened}
                </a>

                <button
                  type="button"
                  onClick={() => copyLink(link.shortened)}
                  className={`
                    rounded-lg
                    px-6
                    py-2
                    font-bold
                    text-white
                    transition
                    ${
                      copiedLink === link.shortened
                        ? "bg-[#3b3054]"
                        : "bg-cyan-400 hover:bg-cyan-300"
                    }
                  `}
                >
                  {copiedLink === link.shortened
                    ? "Copied!"
                    : "Copy"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
