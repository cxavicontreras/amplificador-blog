import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import Gallery from "../components/Gallery";

import esquema from "../assets/images/esquematico.png";
import protoboard from "../assets/images/hero.png";
import semaforo from "../assets/images/semaforo.png"

export default function Home() {
  return (
    <div className="bg-slate-950 text-white">

      <Navbar />
      <Hero />

      {/* INTRODUCCIÓN */}
      <section
        id="info"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <SectionTitle
          title="Introducción"
          subtitle="Descripción general del proyecto"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-slate-300 leading-relaxed">
              El proyecto consiste en un amplificador de audio
              de baja potencia basado en el circuito integrado
              LM386, acompañado de un sistema semáforo
              indicador de nivel utilizando LEDs y transistores
              BC547/BC557.

              El sistema permite amplificar señales de audio
              provenientes de un celular o fuente externa y
              visualizar el nivel de intensidad mediante LEDs
              verde, amarillo y rojo.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">

              <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl">
                LM386
              </span>

              <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl">
                BC547
              </span>

              <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-xl">
                BC557
              </span>

            </div>
          </div>

          <img
            src={protoboard}
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="bg-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            title="Objetivos"
            subtitle="Metas principales del sistema"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="bg-slate-800 p-6 rounded-3xl">
              <h3 className="text-xl font-bold text-cyan-400">
                Amplificación
              </h3>

              <p className="mt-4 text-slate-300">
                Amplificar señales de audio usando
                el integrado LM386.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-3xl">
              <h3 className="text-xl font-bold text-yellow-400">
                Monitoreo
              </h3>

              <p className="mt-4 text-slate-300">
                Visualizar el nivel de señal mediante
                LEDs indicadores.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-3xl">
              <h3 className="text-xl font-bold text-red-400">
                Bajo costo
              </h3>

              <p className="mt-4 text-slate-300">
                Implementar una solución económica
                usando componentes comerciales.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FUNCIONAMIENTO */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <SectionTitle
          title="Funcionamiento del Circuito"
          subtitle="Etapas principales del sistema"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Preamplificador
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
              La señal de entrada pasa inicialmente
              por una etapa de preamplificación usando
              transistores BC547 y BC557.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Amplificador LM386
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
              El LM386 amplifica la señal de audio y
              la envía hacia un parlante de 8 ohms.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Control de Volumen
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
              Un potenciómetro de 10kΩ controla
              el nivel de entrada del amplificador.
            </p>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-cyan-400">
              Semáforo LED
            </h3>

            <p className="mt-4 text-slate-300 leading-relaxed">
              LEDs verde, amarillo y rojo indican
              el nivel de señal de audio.
            </p>
          </div>

        </div>
      </section>

      {/* ESQUEMÁTICO */}
      <section className="bg-slate-900 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            title="Esquemático"
            subtitle="Diseño completo del circuito"
          />

          <img
            src={esquema}
            className="rounded-3xl mt-12 shadow-2xl"
          />

        </div>

      </section>

      {/* COMPONENTES */}
      <section id="componentes" className="max-w-7xl mx-auto px-6 py-24">

        <SectionTitle
          title="Componentes Utilizados"
          subtitle="Elementos principales del proyecto"
        />

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          {[
            "LM386",
            "BC547",
            "BC557",
            "LEDs",
            "Capacitores",
            "Resistencias",
            "Potenciómetro",
            "Parlante 8Ω",
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-900 p-6 rounded-3xl border border-slate-800"
            >
              <h3 className="text-lg font-bold text-cyan-400">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* GALERÍA */}
      <section
        id="galeria"
        className="bg-slate-900 py-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <SectionTitle
            title="Galería del Proyecto"
            subtitle="Proceso de construcción en protoboard"
          />

          <div className="mt-12">
            <Gallery />
          </div>

        </div>
      </section>

      {/* VENTAJAS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <SectionTitle
          title="Ventajas del Sistema"
          subtitle="Beneficios principales"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-slate-900 p-6 rounded-3xl">
            <h3 className="text-green-400 text-xl font-bold">
              Audio limpio
            </h3>

            <p className="mt-4 text-slate-300">
              Buena calidad de sonido y baja distorsión.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl">
            <h3 className="text-green-400 text-xl font-bold">
              Bajo costo
            </h3>

            <p className="mt-4 text-slate-300">
              Componentes económicos y fáciles de conseguir.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl">
            <h3 className="text-green-400 text-xl font-bold">
              Indicador visual
            </h3>

            <p className="mt-4 text-slate-300">
              LEDs permiten monitorear la señal fácilmente.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500">
        Proyecto de Electrónica Analógica — Universidad Mariano Gálvez
      </footer>

    </div>
  );
}