import portada from "../assets/images/hero.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <span className="text-cyan-400 font-semibold">
            Electrónica Analógica
          </span>

          <h1 className="text-6xl font-black leading-tight mt-4">

            Amplificador de Audio
            con Semáforo Indicador

          </h1>

          <p className="text-slate-400 mt-6 text-lg">

            Sistema basado en LM386,
            transistores BC547/BC557
            y LEDs indicadores de nivel.

          </p>

          <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-bold">

            Ver Proyecto

          </button>

        </div>

        <img
          src={portada}
          className="rounded-3xl shadow-2xl"
        />

      </div>

    </section>
  );
}