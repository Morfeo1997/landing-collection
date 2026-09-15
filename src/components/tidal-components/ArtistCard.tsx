import { Play, Heart } from "lucide-react";

interface ArtistCardProps {
  image: string;
  name: string;
  subtitle?: string;
  showPlayButton?: boolean;
  showFavorite?: boolean;
  onPlay?: () => void;
}

export default function ArtistCard({
  image,
  name,
  subtitle = "Artista",
  showPlayButton = true,
  showFavorite = false,
  onPlay,
}: ArtistCardProps) {
  return (
    <article className="group min-w-0">
      <div className="relative aspect-square overflow-hidden rounded-full bg-[#242424]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/30" />

        {showPlayButton && (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Reproducir música de ${name}`}
            className="absolute bottom-3 right-3 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-300 hover:scale-105 group-hover:translate-y-0 group-hover:opacity-100"
          >
            <Play size={20} fill="currentColor" />
          </button>
        )}

        {showFavorite && (
          <button
            type="button"
            aria-label={`Añadir a favoritos a ${name}`}
            className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity duration-300 hover:bg-black group-hover:opacity-100"
          >
            <Heart size={18} />
          </button>
        )}
      </div>

      <div className="mt-3 text-center">
        <h3 className="truncate text-sm font-semibold text-white">{name}</h3>
        <p className="mt-1 truncate text-xs text-[#a7a7a7]">{subtitle}</p>
      </div>
    </article>
  );
}
