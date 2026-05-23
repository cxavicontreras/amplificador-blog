import { Cpu, GalleryHorizontal, CircuitBoard } from "lucide-react";

export default function Navbar() {
  return (

    <nav
      className="
        fixed
        top-0
        w-full
        z-50
        border-b
        border-cyan-500/10
        bg-slate-950/70
        backdrop-blur-xl
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          justify-between
          items-center
        "
      >

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <div
            className="
              p-2
              rounded-xl
              bg-cyan-500/10
              border
              border-cyan-500/20
            "
          >
            <CircuitBoard className="text-cyan-400" size={22} />
          </div>

          <div>

            <h1 className="text-xl font-black text-white">
              LM386 Project
            </h1>

            <p className="text-xs text-slate-500">
              Electrónica Analógica
            </p>

          </div>

        </div>

        {/* LINKS */}

        <div className="hidden md:flex items-center gap-3">

          <a
            href="#info"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              text-slate-300
              hover:text-cyan-400
              hover:bg-cyan-500/10
              transition
            "
          >
            <Cpu size={18} />
            Información
          </a>

          <a
            href="#componentes"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              text-slate-300
              hover:text-cyan-400
              hover:bg-cyan-500/10
              transition
            "
          >
            <CircuitBoard size={18} />
            Componentes
          </a>

          <a
            href="#galeria"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              text-slate-300
              hover:text-cyan-400
              hover:bg-cyan-500/10
              transition
            "
          >
            <GalleryHorizontal size={18} />
            Galería
          </a>

        </div>

      </div>

    </nav>
  );
}