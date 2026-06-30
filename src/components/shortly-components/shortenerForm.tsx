import BgDesktop from "../../assets/bg/shortly/bg-shorten-desktop.svg";
import BgMobile from "../../assets/bg/shortly/bg-shorten-mobile.svg";

export default function ShortenerForm () {
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