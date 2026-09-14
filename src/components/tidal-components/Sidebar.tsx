import {
  Music2,
  Globe,
  Rss,
  Library,
  PlusCircle,
  ArrowDownToLine,
  ChevronRight,
  X,
} from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({
  isOpen = true,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Overlay para mobile */}
      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-40
            bg-black/70
            lg:hidden
          "
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-64
          flex-col
          overflow-y-auto
          bg-[#121212]
          px-3
          py-4
          text-white
          transition-transform
          duration-300

          lg:translate-x-0

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* =========================
            Logo
        ========================== */}

        <div className="mb-6 flex items-center justify-between px-3">
          <a
            href="#"
            className="text-xl font-bold tracking-tight"
          >
            TIDAL
          </a>

          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={onClose}
            className="
              rounded-full
              p-2
              text-gray-400
              transition
              hover:bg-[#242424]
              hover:text-white
              lg:hidden
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* =========================
            Navegación principal
        ========================== */}

        <nav className="space-y-1">
          <SidebarItem
            icon={<Music2 size={18} />}
            label="Música"
            active
          />

          <SidebarItem
            icon={<Globe size={18} />}
            label="Explorar"
          />

          <SidebarItem
            icon={<Rss size={18} />}
            label="Feed"
          />

          <SidebarItem
            icon={<Library size={18} />}
            label="Colección"
            hasArrow
          />
        </nav>

        {/* =========================
            Playlists
        ========================== */}

        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between px-3">
            <span className="text-xs text-gray-500">
              Playlists
            </span>

            <div className="flex items-center gap-2 text-gray-500">
              <PlusCircle size={14} />
              <ArrowDownToLine size={14} />
            </div>
          </div>

          <PlaylistItem
            title="Transfiere tu música gratis"
            description="Transfiere todas tus playlists, artistas, canciones y álbumes preferidos a TIDAL."
          />

          <PlaylistItem
            title="Transfiere tu música gratis"
            description="Transfiere todas tus playlists, artistas, canciones y álbumes preferidos a TIDAL."
          />
        </div>
      </aside>
    </>
  );
}

/* =========================
   Item de navegación
========================= */

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  hasArrow?: boolean;
}

function SidebarItem({
  icon,
  label,
  active = false,
  hasArrow = false,
}: SidebarItemProps) {
  return (
    <a
      href="#"
      className={`
        flex
        items-center
        gap-3
        rounded-md
        px-3
        py-3
        text-sm
        transition-colors

        ${
          active
            ? "bg-[#292929] text-white"
            : "text-gray-400 hover:bg-[#242424] hover:text-white"
        }
      `}
    >
      {icon}

      <span className="flex-1">{label}</span>

      {hasArrow && <ChevronRight size={16} />}
    </a>
  );
}

/* =========================
   Playlist promocional
========================= */

interface PlaylistItemProps {
  title: string;
  description: string;
}

function PlaylistItem({
  title,
  description,
}: PlaylistItemProps) {
  return (
    <div className="mb-3 rounded-lg bg-[#1e1e1e] p-3">
      <div className="mb-2 flex items-start justify-between">
        <h3 className="text-xs font-semibold text-white">
          {title}
        </h3>

        <button
          type="button"
          aria-label="Cerrar promoción"
          className="text-gray-500 transition hover:text-white"
        >
          <X size={14} />
        </button>
      </div>

      <p className="mb-4 text-[10px] leading-relaxed text-gray-400">
        {description}
      </p>

      <button
        type="button"
        className="
          w-full
          rounded-full
          bg-[#303030]
          py-2
          text-xs
          font-semibold
          text-white
          transition
          hover:bg-[#404040]
        "
      >
        Empecemos
      </button>
    </div>
  );
}
