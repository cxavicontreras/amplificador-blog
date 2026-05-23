import { useState } from "react";
import {
  Menu,
  X,
  Cpu,
  CircuitBoard,
  GalleryHorizontal,
} from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (

    <nav
      className="
        fixed
        top-0
        w-full
        z-50
        bg-slate-950/70
        backdrop-blur-xl
        border-b
        border-cyan-500/10
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        {/* LOGO */}

        <div className="flex items-center gap-3">

          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20">

            <CircuitBoard
              className="text-cyan-400"
              size={22}
            />

          </div>

          <div>

            <h1 className="text-lg font-black">
              LM386 Project
            </h1>

            <p className="text-xs text-slate-500">
              Electrónica Analógica
            </p>

          </div>

        </div>

        {/* DESKTOP */}

        <div className="hidden md:flex items-center gap-3">

          <a
            href="#info"
            className="px-4 py-2 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400 transition"
          >
            Información
          </a>

          <a
            href="#componentes"
            className="px-4 py-2 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400 transition"
          >
            Componentes
          </a>

          <a
            href="#galeria"
            className="px-4 py-2 rounded-xl hover:bg-cyan-500/10 hover:text-cyan-400 transition"
          >
            Galería
          </a>

        </div>

        {/* MOBILE BUTTON */}

        <button
          className="
            md:hidden
            p-2
            rounded-xl
            border
            border-slate-700
          "
          onClick={() => setOpen(!open)}
        >

          {open ? <X size={22} /> : <Menu size={22} />}

        </button>

      </div>

      {/* MOBILE MENU */}

      {open && (

        <div
          className="
            md:hidden
            px-6
            pb-6
            flex
            flex-col
            gap-3
            bg-slate-950/95
            border-t
            border-slate-800
          "
        >

          <a
            href="#info"
            className="
              flex
              items-center
              gap-2
              p-3
              rounded-xl
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
              p-3
              rounded-xl
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
              p-3
              rounded-xl
              hover:bg-cyan-500/10
              transition
            "
          >
            <GalleryHorizontal size={18} />
            Galería
          </a>

        </div>

      )}

    </nav>
  );
}