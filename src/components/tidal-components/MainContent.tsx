// src/components/tidal-components/MainContent.tsx

import React from "react";
import AlbumCard from "./AlbumCard";

interface Album {
  image: string;
  title: string;
  artist: string;
  badge?: string;
  showPlayButton?: boolean;
  showFavorite?: boolean;
}

interface MainContentProps {
  onPlay?: (album: Album) => void;
}

const MainContent: React.FC<MainContentProps> = ({ onPlay }) => {
  // Éxitos destacados
  const topHits: Album[] = [
    {
      image: "/assets/tidal/top-hits.jpg",
      title: "TIDAL's Top Hits",
      artist: "TIDAL",
      badge: "TOP HITS",
    },
    {
      image: "/assets/tidal/rap-hits.jpg",
      title: "Rap Hits",
      artist: "TIDAL",
      badge: "RAP HITS",
    },
    {
      image: "/assets/tidal/dj-hits.jpg",
      title: "DJ Hits",
      artist: "TIDAL",
      badge: "DJ HITS",
      showPlayButton: true,
      showFavorite: true,
    },
    {
      image: "/assets/tidal/pop-hits.jpg",
      title: "Pop Hits",
      artist: "TIDAL",
      badge: "POP HITS",
    },
    {
      image: "/assets/tidal/rock-hits.jpg",
      title: "Rock Hits",
      artist: "TIDAL",
      badge: "ROCK HITS",
    },
  ];

  // Álbumes populares
  const popularAlbums: Album[] = [
    {
      image: "/assets/tidal/confessions.jpg",
      title: "CONFESSIONS",
      artist: "Madonna",
      badge: "ALBUM",
    },
    {
      image: "/assets/tidal/pretty-sad.jpg",
      title: "you seem pretty sad for a ...",
      artist: "Olivia Rodrigo",
    },
    {
      image: "/assets/tidal/reality-awaits.jpg",
      title: "Reality Awaits",
      artist: "The Strokes",
      showPlayButton: true,
      showFavorite: true,
    },
    {
      image: "/assets/tidal/petal.jpg",
      title: "petal",
      artist: "Ariana Grande",
    },
    {
      image: "/assets/tidal/music-fashion-film.jpg",
      title: "Music, Fashion, Film",
      artist: "Charli xcx",
      badge: "ALBUM",
    },
  ];

  // Nuevos álbumes
  const newAlbums: Album[] = [
    {
      image: "/assets/tidal/westside-whimsy.jpg",
      title: "Westside Whimsy",
      artist: "Jhené Aiko",
      badge: "NEW",
    },
    {
      image: "/assets/tidal/bigger-than-the-devil.jpg",
      title: "BIGGER THAN THE DEVIL",
      artist: "EST Gee",
      showPlayButton: true,
      showFavorite: true,
    },
    {
      image: "/assets/tidal/heres-because-of-hope.jpg",
      title: "Here Because of Hope",
      artist: "Ezra Collective",
    },
    {
      image: "/assets/tidal/para-cuando-sean-mayores.jpg",
      title: "Para Cuando Sean Mayores",
      artist: "Camilo",
    },
    {
      image: "/assets/tidal/lenny-yavarez.jpg",
      title: "∞",
      artist: "Lenny Tavárez",
    },
  ];

  // Playlists populares
  const popularPlaylists: Album[] = [
    {
      image: "/assets/tidal/fresco.jpg",
      title: "FRESCO: Best New Latin Tracks",
      artist: "TIDAL",
      badge: "PLAYLIST",
    },
    {
      image: "/assets/tidal/dale-reggaeton.jpg",
      title: "Dale Reggaeton",
      artist: "TIDAL",
      showPlayButton: true,
    },
    {
      image: "/assets/tidal/new-reggaeton-videos.jpg",
      title: "New Reggaeton Videos",
      artist: "TIDAL",
    },
    {
      image: "/assets/tidal/exitos-de-hoy.jpg",
      title: "Éxitos De Hoy: Top Latin Hits",
      artist: "TIDAL",
    },
    {
      image: "/assets/tidal/new-arrivals.jpg",
      title: "New Arrivals: Hip-Hop and Latin",
      artist: "TIDAL",
    },
  ];

  // Selección editorial
  const editorialAlbums: Album[] = [
    {
      image: "/assets/tidal/dolly-parton-essentials.jpg",
      title: "Dolly Parton Essentials",
      artist: "TIDAL",
    },
    {
      image: "/assets/tidal/dolly-parton-tracks.jpg",
      title: "Tracks & Traces: Dolly Parton",
      artist: "TIDAL",
    },
    {
      image: "/assets/tidal/covering-dolly-parton.jpg",
      title: "Covering Dolly Parton",
      artist: "TIDAL",
    },
    {
      image: "/assets/tidal/dolly-parton-deep-cuts.jpg",
      title: "Dolly Parton: Deep Cuts",
      artist: "TIDAL",
    },
    {
      image: "/assets/tidal/covering-jolene.jpg",
      title: "Covering: Jolene",
      artist: "TIDAL",
    },
  ];

  // Artistas populares
  const popularArtists: Album[] = [
    {
      image: "/assets/tidal/bad-bunny.jpg",
      title: "Bad Bunny",
      artist: "",
    },
    {
      image: "/assets/tidal/patricio-rey.jpg",
      title: "Patricio Rey y sus Redonditos...",
      artist: "",
      showPlayButton: true,
    },
    {
      image: "/assets/tidal/the-beatles.jpg",
      title: "The Beatles",
      artist: "",
    },
    {
      image: "/assets/tidal/michael-jackson.jpg",
      title: "Michael Jackson",
      artist: "",
    },
    {
      image: "/assets/tidal/soda-stereo.jpg",
      title: "Soda Stereo",
      artist: "",
    },
  ];

  // Secciones con formato de lista
  const spotlight = [
    {
      title: "AFRODISÍACO",
      artist: "Rauw Alejandro",
      image: "/assets/tidal/afrodisiaco.jpg",
    },
    {
      title: "Pushing Rope",
      artist: "Almost Monday",
      image: "/assets/tidal/pushing-rope.jpg",
    },
    {
      title: "Destiny (feat. Anthony To...)",
      artist: "Morgan Conn",
      image: "/assets/tidal/destiny.jpg",
    },
    {
      title: "Con Con",
      artist: "SHELL X",
      image: "/assets/tidal/con-con.jpg",
    },
    {
      title: "holding flowers",
      artist: "FLIGHT RISK",
      image: "/assets/tidal/holding-flowers.jpg",
    },
    {
      title: "all the ones (feat. Zay Blaz...)",
      artist: "María Carmen",
      image: "/assets/tidal/all-the-ones.jpg",
    },
    {
      title: "STUNNIN ME (feat. Rauw...)",
      artist: "TOP MEECH",
      image: "/assets/tidal/stunnin-me.jpg",
    },
    {
      title: "African America",
      artist: "Amira Unplugged",
      image: "/assets/tidal/african-america.jpg",
    },
    {
      title: "Despertar",
      artist: "Angoixa",
      image: "/assets/tidal/despertar.jpg",
    },
  ];

  const newSongs = [
    {
      title: "Pillow Fight",
      artist: "Tinashe",
      image: "/assets/tidal/pillow-fight.jpg",
    },
    {
      title: "Backwards",
      artist: "Quavo, T.I.",
      image: "/assets/tidal/backwards.jpg",
    },
    {
      title: "My Whole World",
      artist: "Kings Of Leon",
      image: "/assets/tidal/my-whole-world.jpg",
    },
    {
      title: "When In Rome",
      artist: "Dove Cameron",
      image: "/assets/tidal/when-in-rome.jpg",
    },
    {
      title: "Oh No",
      artist: "Rema",
      image: "/assets/tidal/oh-no.jpg",
    },
    {
      title: "Who's That",
      artist: "The War On Drugs",
      image: "/assets/tidal/whos-that.jpg",
    },
    {
      title: "Arsenal",
      artist: "Slipknot",
      image: "/assets/tidal/arsenal.jpg",
    },
    {
      title: "Juicy",
      artist: "Victoria Monét",
      image: "/assets/tidal/juicy.jpg",
    },
    {
      title: "TAKE NOBODY",
      artist: "Jad5, J Hus, Skillibeng",
      image: "/assets/tidal/take-nobody.jpg",
    },
  ];

  const renderAlbumSection = (
    title: string,
    albums: Album[],
    circular = false
  ) => (
    <section className="mb-8">
      {/* Encabezado de la sección */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">{title}</h2>

        <button
          type="button"
          className="text-sm text-[#b3b3b3] transition-colors hover:text-white"
        >
          Ver todos
        </button>
      </div>

      {/* Grid responsive */}
      <div
        className={`grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ${
          circular ? "[&>article>div:first-child]:rounded-full" : ""
        }`}
      >
        {albums.map((album, index) => (
          <AlbumCard
            key={`${album.title}-${index}`}
            {...album}
            onPlay={() => onPlay?.(album)}
          />
        ))}
      </div>
    </section>
  );

  const renderListSection = (
    title: string,
    items: typeof spotlight
  ) => (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">{title}</h2>

        <button
          type="button"
          className="text-sm text-[#b3b3b3] hover:text-white"
        >
          Ver todos
        </button>
      </div>

      <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <button
            type="button"
            key={`${item.title}-${index}`}
            className="group flex min-w-0 items-center gap-3 border-b border-[#252525] py-2 text-left transition-colors hover:bg-[#181818]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-12 w-12 shrink-0 object-cover"
              loading="lazy"
            />

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">
                {item.title}
              </p>

              <p className="truncate text-xs text-[#a7a7a7]">
                {item.artist}
              </p>
            </div>

            <span className="px-2 text-lg text-[#777] opacity-0 transition-opacity group-hover:opacity-100">
              •••
            </span>
          </button>
        ))}
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-[1500px] px-4 py-6 sm:px-6 lg:px-8">
        {/* Navegación secundaria */}
        <nav className="mb-8 flex gap-6 border-b border-[#242424] pb-4 text-sm">
          <button
            type="button"
            className="border-b-2 border-white pb-3 font-semibold text-white"
          >
            Para ti
          </button>

          <button
            type="button"
            className="text-[#999] transition-colors hover:text-white"
          >
            Selección del equipo
          </button>

          <button
            type="button"
            className="text-[#999] transition-colors hover:text-white"
          >
            Cargas
          </button>
        </nav>

        {/* Éxitos destacados */}
        {renderAlbumSection("Los grandes éxitos", topHits)}

        {/* Álbumes populares */}
        {renderAlbumSection("Álbumes populares", popularAlbums)}

        {/* Spotlight */}
        {renderListSection("Spotlight", spotlight)}

        <p className="mb-6 -mt-5 text-sm text-[#999]">
          Canciones de artistas independientes seleccionadas por el equipo
          editorial de TIDAL. Escúchalas gratis.
        </p>

        {/* Artistas populares */}
        {renderAlbumSection(
          "Artistas populares",
          popularArtists,
          true
        )}

        {/* Nuevos álbumes */}
        {renderAlbumSection("Nuevos álbumes", newAlbums)}

        {/* Nuevas canciones */}
        {renderListSection("Nuevas canciones", newSongs)}

        {/* Mixes populares */}
        {renderAlbumSection("Mixes populares", [
          {
            image: "/assets/tidal/ariana-grande-mix.jpg",
            title: "Artist Radio Ariana Grande",
            artist: "Radio de artista",
          },
          {
            image: "/assets/tidal/olivia-rodrigo-mix.jpg",
            title: "Artist Radio Olivia Rodrigo",
            artist: "Radio de artista",
            showPlayButton: true,
            showFavorite: true,
          },
          {
            image: "/assets/tidal/madonna-mix.jpg",
            title: "Artist Radio Madonna",
            artist: "Radio de artista",
          },
          {
            image: "/assets/tidal/las-mas-bonitas.jpg",
            title: "Las mas bonitas son...",
            artist: "Anuel AA",
          },
          {
            image: "/assets/tidal/suddenly-mix.jpg",
            title: "Track Radio Suddenly",
            artist: "L.O.I",
          },
        ])}

        {/* Playlists populares */}
        {renderAlbumSection(
          "Playlists populares en TIDAL",
          popularPlaylists
        )}

        {/* Selección editorial */}
        {renderAlbumSection("De Nuestros Editores", editorialAlbums)}
      </div>
    </main>
  );
};

export default MainContent;
