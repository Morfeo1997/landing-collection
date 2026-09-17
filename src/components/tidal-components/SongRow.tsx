import { Heart, MoreHorizontal, Play } from "lucide-react";

interface SongRowProps {
  image: string;
  title: string;
  artist: string;
  album?: string;
  duration?: string;
  explicit?: boolean;
  showPlayButton?: boolean;
  showFavorite?: boolean;
  onPlay?: () => void;
}

export default function SongRow({
  image,
  title,
  artist,
  album,
  duration = "3:45",
  explicit = false,
  showPlayButton = true,
  showFavorite = true,
  onPlay,
}: SongRowProps) {
  return (
    <div className="group flex items-center gap-3 rounded-md px-3 py-2 transition-colors hover:bg-[#242424]">
      {/* Imagen + botón de reproducción */}
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />

        {showPlayButton && (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Reproducir ${title}`}
            className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 transition-opacity group-hover:opacity-100"
          >
            <Play size={20} fill="currentColor" />
          </button>
        )}
      </div>

      {/* Información de la canción */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-sm font-medium text-white">
            {title}
          </h3>

          {explicit && (
            <span className="shrink-0 rounded bg-[#555] px-1.5 py-0.5 text-[10px] font-bold text-white">
              E
            </span>
          )}
        </div>

        <p className="truncate text-xs text-[#a7a7a7]">{artist}</p>
      </div>

      {/* Álbum */}
      {album && (
        <div className="hidden min-w-0 flex-1 md:block">
          <p className="truncate text-sm text-[#a7a7a7]">{album}</p>
        </div>
      )}

      {/* Duración */}
      <span className="hidden w-12 text-right text-xs text-[#a7a7a7] sm:block">
        {duration}
      </span>

      {/* Acciones */}
      <div className="flex items-center gap-1">
        {showFavorite && (
          <button
            type="button"
            aria-label={`Añadir ${title} a favoritos`}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#a7a7a7] opacity-0 transition-all hover:text-white group-hover:opacity-100"
          >
            <Heart size={18} />
          </button>
        )}

        <button
          type="button"
          aria-label={`Más opciones para ${title}`}
          className="flex h-9 w-9 items-center justify-center rounded-full text-[#a7a7a7] transition-colors hover:text-white"
        >
          <MoreHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}
