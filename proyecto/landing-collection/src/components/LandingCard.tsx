import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface LandingCardProps {
  title: string;
  image: string;
  route: string;
  category: string;
}

export default function LandingCard({
  title,
  image,
  route,
  category,
}: LandingCardProps) {
  return (
    <Link
      to={route}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-white/20
      "
    >
      <img
        src={image}
        alt={title}
        className="
          h-[320px]
          w-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/30
          to-transparent
        "
      />

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <span
          className="
            mb-2
            text-xs
            uppercase
            tracking-widest
            text-zinc-400
          "
        >
          {category}
        </span>

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <ArrowUpRight
            className="
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
            size={20}
          />
        </div>
      </div>
    </Link>
  );
}
