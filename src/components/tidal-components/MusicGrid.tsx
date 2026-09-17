import React from "react";
import AlbumCard from "./AlbumCard";
import ArtistCard from "./ArtistCard";

interface MusicItem {
  image: string;
  title: string;
  artist?: string;
  subtitle?: string;
  badge?: string;
  type?: "album" | "artist";
}

interface MusicGridProps {
  items: MusicItem[];
  columns?: 2 | 3 | 4 | 5 | 6;
  showPlayButton?: boolean;
  showFavorite?: boolean;
  onPlay?: (item: MusicItem) => void;
}

export default function MusicGrid({
  items,
  columns = 5,
  showPlayButton = true,
  showFavorite = false,
  onPlay,
}: MusicGridProps) {
  const columnClasses = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
    5: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
    6: "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6",
  };

  return (
    <div className={`grid gap-5 ${columnClasses[columns]}`}>
      {items.map((item, index) => {
        const key = `${item.title}-${index}`;

        if (item.type === "artist") {
          return (
            <ArtistCard
              key={key}
              image={item.image}
              name={item.title}
              subtitle={item.subtitle}
              showPlayButton={showPlayButton}
              showFavorite={showFavorite}
              onPlay={() => onPlay?.(item)}
            />
          );
        }

        return (
          <AlbumCard
            key={key}
            image={item.image}
            title={item.title}
            artist={item.artist ?? ""}
            badge={item.badge}
            showPlayButton={showPlayButton}
            showFavorite={showFavorite}
            onPlay={() => onPlay?.(item)}
          />
        );
      })}
    </div>
  );
}
