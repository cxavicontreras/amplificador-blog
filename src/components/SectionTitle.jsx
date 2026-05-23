export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-12">

      <h2 className="text-4xl md:text-5xl font-black">
        {title}
      </h2>

      <p className="text-slate-400 mt-4">
        {subtitle}
      </p>

    </div>
  );
}