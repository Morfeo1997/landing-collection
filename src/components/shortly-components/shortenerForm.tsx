import BgDesktop from "../../assets/bg/shortly/bg-shorten-desktop.svg";
import BgMobile from "../../assets/bg/shortly/bg-shorten-mobile.svg";
import { FormEvent, useState } from "react";

interface ShortenedLink {
  original: string;
  shortened: string;
}

export default function ShortenerForm () {
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState<ShortenedLink[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [copiedLink, setCopiedLink] = useState("");

  async function shortenUrl(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!url.trim()) {
      setError("Please add a link");
      return;
    }

    try {
      // Validación básica
      new URL(url);
    } catch {
      setError("Please enter a valid URL");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "https://cleanuri.com/api/v1/shorten",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            url,
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      setLinks((prev) => [
        {
          original: url,
          shortened: data.result_url,
        },
        ...prev,
      ]);

      setUrl("");
    } catch {
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
    } catch {
      console.error("Clipboard not available");
    }
  }


    return(
        <>
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
            <div className="relative overflow-hidden rounded-xl bg-[#3b3054] p-6 md:p-10">
            {/* Background Desktop */}

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

            {/* Background Mobile */}

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

            <form
                className="
                relative
                z-10
                flex
                flex-col
                gap-4

                md:flex-row
                "
            >
                <input
                type="text"
                placeholder="Shorten a link here..."
                className="
                    h-14
                    flex-1
                    rounded-lg
                    bg-white
                    px-5
                    outline-none

                    placeholder:text-gray-400
                "
                />

                <button
                className="
                    h-14
                    rounded-lg
                    bg-cyan-400
                    px-10
                    font-bold
                    text-white
                    transition
                    hover:bg-cyan-300
                "
                >
                Shorten It!
                </button>
            </form>
            </div>
        </div>
      </>
    )
}
