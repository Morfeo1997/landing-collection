import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const footerSections = [
  {
    title: "Descubrir",
    links: [
      "Música",
      "Álbumes",
      "Artistas",
      "Playlists",
      "Podcasts",
      "Radio",
    ],
  },
  {
    title: "TIDAL",
    links: [
      "Acerca de",
      "Precios",
      "Planes",
      "TIDAL para artistas",
      "TIDAL para DJs",
      "TIDAL para empresas",
    ],
  },
  {
    title: "Ayuda",
    links: [
      "Centro de ayuda",
      "Contacto",
      "Privacidad",
      "Términos y condiciones",
      "Cookies",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#000] px-6 py-12 text-[#a7a7a7] md:px-10 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <div className="mb-4 text-2xl font-black tracking-[-0.08em] text-white">
              TIDAL
            </div>

            <p className="max-w-xs text-sm leading-6">
              Música de alta fidelidad para disfrutar de tus artistas y
              canciones favoritas.
            </p>
          </div>

          {/* Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-6 border-t border-[#2a2a2a] pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs">
            © {new Date().getFullYear()} TIDAL. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="transition-colors hover:text-white"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="transition-colors hover:text-white"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              aria-label="Twitter"
              className="transition-colors hover:text-white"
            >
              <Twitter size={18} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className="transition-colors hover:text-white"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
