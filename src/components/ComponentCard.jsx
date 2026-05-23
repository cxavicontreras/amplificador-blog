export default function ComponentCard({
  name,
  description,
}) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition">

      <h3 className="text-xl font-bold text-cyan-400">
        {name}
      </h3>

      <p className="text-slate-400 mt-4">
        {description}
      </p>

    </div>
  );
}