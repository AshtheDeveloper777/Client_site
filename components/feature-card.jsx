export function FeatureCard({ title, description, icon: Icon }) {
  return (
    <article className="group rounded-2xl border border-white/70 bg-white/80 p-6 shadow-xl shadow-slate-200/70 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-300/70">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 text-white shadow-lg shadow-slate-400/30 transition-colors group-hover:bg-primary">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-6 text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}
