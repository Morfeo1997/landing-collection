
import React from "react";

interface AlbumCardProps {
  image: string;
  title: string;
  artist: string;
  badge?: string;
  showPlayButton?: boolean;
  showFavorite?: boolean;
  onPlay?: () => void;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  image,
  title,
  artist,
  badge,
  showPlayButton = false,
  showFavorite = false,
  onPlay,
}) => {
  return (
    <article className="group w-full min-w-0">
      {/* Imagen del álbum */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#242424]">
        <img
          src={image}
          alt={`Portada de ${title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge opcional */}
        {badge && (
          <span className="absolute right-2 top-2 rounded bg-black/70 px-1.5 py-1 text-[10px] font-bold uppercase text-white">
            {badge}
          </span>
        )}

        {/* Botón de reproducción */}
        {showPlayButton && (
          <button
            type="button"
            onClick={onPlay}
            aria-label={`Reproducir ${title}`}
            className="absolute bottom-2 left-2 flex h-9 w-9 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition-all duration-200 hover:scale-105 group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M8 5.14v13.72a1 1 0 0 0 1.53.85l10.29-6.86a1 1 0 0 0 0-1.66L9.53 4.29A1 1 0 0 0 8 5.14Z" />
            </svg>
          </button>
        )}

        {/* Botón de favoritos */}
        {showFavorite && (
          <button
            type="button"
            aria-label={`Añadir ${title} a favoritos`}
            className="absolute bottom-2 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-black/70 text-white opacity-0 transition-opacity duration-200 hover:bg-black group-hover:opacity-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Información del álbum */}
      <div className="mt-2 min-w-0">
        <h3
          className="truncate text-sm font-semibold text-white"
          title={title}
        >
          {title}
        </h3>

        <p
          className="mt-1 truncate text-xs text-[#a7a7a7]"
          title={artist}
        >
          {artist}
        </p>
      </div>
    </article>
  );
};

export default AlbumCard;
