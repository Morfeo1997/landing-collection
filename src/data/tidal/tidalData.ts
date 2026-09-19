export interface TidalAlbum {
  image: string;
  title: string;
  artist: string;
  badge?: string;
}

export interface TidalArtist {
  image: string;
  name: string;
  subtitle?: string;
}

export interface TidalSong {
  image: string;
  title: string;
  artist: string;
  album?: string;
  duration?: string;
  explicit?: boolean;
}

export interface TidalPlaylist {
  image: string;
  title: string;
  description?: string;
}

export const popularAlbums: TidalAlbum[] = [
  {
    image: "/assets/tidal/popular-album-1.jpg",
    title: "HIT ME HARD AND SOFT",
    artist: "Billie Eilish",
  },
  {
    image: "/assets/tidal/popular-album-2.jpg",
    title: "The Tortured Poets Department",
    artist: "Taylor Swift",
  },
  {
    image: "/assets/tidal/popular-album-3.jpg",
    title: "Short n' Sweet",
    artist: "Sabrina Carpenter",
  },
  {
    image: "/assets/tidal/popular-album-4.jpg",
    title: "GNX",
    artist: "Kendrick Lamar",
  },
  {
    image: "/assets/tidal/popular-album-5.jpg",
    title: "MAYHEM",
    artist: "Lady Gaga",
  },
];

export const topHits: TidalAlbum[] = [
  {
    image: "/assets/tidal/top-hits-1.jpg",
    title: "Top Hits",
    artist: "TIDAL",
    badge: "PLAYLIST",
  },
  {
    image: "/assets/tidal/top-hits-2.jpg",
    title: "Today's Hits",
    artist: "TIDAL",
    badge: "PLAYLIST",
  },
  {
    image: "/assets/tidal/top-hits-3.jpg",
    title: "Pop Rising",
    artist: "TIDAL",
    badge: "PLAYLIST",
  },
  {
    image: "/assets/tidal/top-hits-4.jpg",
    title: "Rap 101",
    artist: "TIDAL",
    badge: "PLAYLIST",
  },
  {
    image: "/assets/tidal/top-hits-5.jpg",
    title: "Dance Hits",
    artist: "TIDAL",
    badge: "PLAYLIST",
  },
];

export const spotlightAlbums: TidalAlbum[] = [
  {
    image: "/assets/tidal/spotlight-1.jpg",
    title: "Spotlight",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/spotlight-2.jpg",
    title: "Fresh Finds",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/spotlight-3.jpg",
    title: "New Music Friday",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/spotlight-4.jpg",
    title: "Global Hits",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/spotlight-5.jpg",
    title: "Editor's Picks",
    artist: "TIDAL",
  },
];

export const popularArtists: TidalArtist[] = [
  {
    image: "/assets/tidal/artist-1.jpg",
    name: "Billie Eilish",
    subtitle: "Artista",
  },
  {
    image: "/assets/tidal/artist-2.jpg",
    name: "The Weeknd",
    subtitle: "Artista",
  },
  {
    image: "/assets/tidal/artist-3.jpg",
    name: "Taylor Swift",
    subtitle: "Artista",
  },
  {
    image: "/assets/tidal/artist-4.jpg",
    name: "Drake",
    subtitle: "Artista",
  },
  {
    image: "/assets/tidal/artist-5.jpg",
    name: "Bad Bunny",
    subtitle: "Artista",
  },
  {
    image: "/assets/tidal/artist-6.jpg",
    name: "Kendrick Lamar",
    subtitle: "Artista",
  },
];

export const newAlbums: TidalAlbum[] = [
  {
    image: "/assets/tidal/new-album-1.jpg",
    title: "Nuevo álbum",
    artist: "Artista destacado",
    badge: "NUEVO",
  },
  {
    image: "/assets/tidal/new-album-2.jpg",
    title: "New Releases",
    artist: "TIDAL",
    badge: "NUEVO",
  },
  {
    image: "/assets/tidal/new-album-3.jpg",
    title: "Latest Release",
    artist: "Artista",
    badge: "NUEVO",
  },
  {
    image: "/assets/tidal/new-album-4.jpg",
    title: "Fresh Music",
    artist: "TIDAL",
    badge: "NUEVO",
  },
  {
    image: "/assets/tidal/new-album-5.jpg",
    title: "New Sounds",
    artist: "TIDAL",
    badge: "NUEVO",
  },
];

export const newSongs: TidalSong[] = [
  {
    image: "/assets/tidal/song-1.jpg",
    title: "Birds of a Feather",
    artist: "Billie Eilish",
    album: "HIT ME HARD AND SOFT",
    duration: "3:30",
  },
  {
    image: "/assets/tidal/song-2.jpg",
    title: "Espresso",
    artist: "Sabrina Carpenter",
    album: "Short n' Sweet",
    duration: "2:55",
  },
  {
    image: "/assets/tidal/song-3.jpg",
    title: "Luther",
    artist: "Kendrick Lamar & SZA",
    album: "GNX",
    duration: "2:57",
    explicit: true,
  },
  {
    image: "/assets/tidal/song-4.jpg",
    title: "Timeless",
    artist: "The Weeknd",
    album: "Hurry Up Tomorrow",
    duration: "4:16",
  },
  {
    image: "/assets/tidal/song-5.jpg",
    title: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    album: "MAYHEM",
    duration: "4:11",
  },
];

export const popularMixes: TidalAlbum[] = [
  {
    image: "/assets/tidal/mix-1.jpg",
    title: "Mix de Pop",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/mix-2.jpg",
    title: "Mix de Hip-Hop",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/mix-3.jpg",
    title: "Mix de R&B",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/mix-4.jpg",
    title: "Mix de Dance",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/mix-5.jpg",
    title: "Mix de Rock",
    artist: "TIDAL",
  },
];

export const popularPlaylists: TidalPlaylist[] = [
  {
    image: "/assets/tidal/playlist-1.jpg",
    title: "Today's Top Hits",
    description: "Las canciones más escuchadas del momento.",
  },
  {
    image: "/assets/tidal/playlist-2.jpg",
    title: "RapCaviar",
    description: "Lo mejor del hip-hop y rap actual.",
  },
  {
    image: "/assets/tidal/playlist-3.jpg",
    title: "Pop Favorites",
    description: "Tus canciones pop favoritas.",
  },
  {
    image: "/assets/tidal/playlist-4.jpg",
    title: "R&B Essentials",
    description: "Una selección esencial de R&B.",
  },
  {
    image: "/assets/tidal/playlist-5.jpg",
    title: "Chill Vibes",
    description: "Música para relajarte.",
  },
];

export const editorsPicks: TidalAlbum[] = [
  {
    image: "/assets/tidal/editor-1.jpg",
    title: "Selección de nuestros editores",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/editor-2.jpg",
    title: "Artistas emergentes",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/editor-3.jpg",
    title: "Álbumes imprescindibles",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/editor-4.jpg",
    title: "Descubrimientos",
    artist: "TIDAL",
  },
  {
    image: "/assets/tidal/editor-5.jpg",
    title: "Recomendados para ti",
    artist: "TIDAL",
  },
];
