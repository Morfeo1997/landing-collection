import { Search, ChevronDown, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="flex h-16 items-center justify-between gap-6 px-6 lg:px-8">
        {/* Logo - Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <span className="text-xl font-bold tracking-tight">
            TIDAL
          </span>
        </div>

        {/* Navegación superior - Desktop */}
        <nav className="hidden items-center gap-6 text-sm text-gray-300 lg:flex">
          <a
            href="#"
            className="transition-colors hover:text-white"
          >
            Para ti
          </a>

          <a
            href="#"
            className="transition-colors hover:text-white"
          >
            Selección del equipo
          </a>

          <a
            href="#"
            className="transition-colors hover:text-white"
          >
            Cargas
          </a>
        </nav>

        {/* Controles del Header */}
        <div className="flex flex-1 items-center justify-end gap-3">
          {/* Buscador */}
          <div className="relative hidden w-full max-w-xs md:block">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="search"
              placeholder="Buscar"
              className="
                h-9
                w-full
                rounded-full
                border-none
                bg-[#242424]
                pl-9
                pr-4
                text-sm
                text-white
                outline-none
                placeholder:text-gray-400
                focus:ring-1
                focus:ring-gray-500
              "
            />
          </div>

          {/* Descargar TIDAL */}
          <button
            type="button"
            className="
              hidden
              rounded-full
              bg-[#242424]
              px-4
              py-2
              text-xs
              font-semibold
              transition-colors
              hover:bg-[#333333]
              sm:block
            "
          >
            Descarga TIDAL
          </button>

          {/* Iniciar sesión */}
          <button
            type="button"
            className="
              hidden
              whitespace-nowrap
              text-xs
              font-semibold
              text-gray-300
              transition-colors
              hover:text-white
              sm:block
            "
          >
            Iniciar sesión
          </button>

          {/* Crear cuenta */}
          <button
            type="button"
            className="
              hidden
              whitespace-nowrap
              rounded-full
              bg-white
              px-4
              py-2
              text-xs
              font-bold
              text-black
              transition-colors
              hover:bg-gray-200
              sm:block
            "
          >
            Crea una cuenta gratuita
          </button>

          {/* Menú móvil */}
          <button
            type="button"
            aria-label="Abrir menú"
            className="
              rounded-full
              p-2
              text-gray-300
              transition-colors
              hover:bg-[#242424]
              hover:text-white
              md:hidden
            "
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
