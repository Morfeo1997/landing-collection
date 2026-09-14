import { useState } from "react";
import { Menu } from "lucide-react";

import Header from "../components/tidal-components/Header";
import Sidebar from "../components/tidal-components/Sidebar";

export default function Tidal() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="lg:ml-64">
        <Header />

        <main>
          {/* Aquí irán las secciones de música */}
        </main>
      </div>

      {/* Botón para abrir Sidebar en mobile */}
      <button
        type="button"
        onClick={() => setSidebarOpen(true)}
        className="
          fixed
          bottom-6
          left-6
          z-30
          rounded-full
          bg-white
          p-3
          text-black
          lg:hidden
        "
        aria-label="Abrir menú"
      >
        <Menu size={22} />
      </button>
    </div>
  );
}
