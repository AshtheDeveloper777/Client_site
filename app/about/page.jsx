export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <section className="py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            About TechNova
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            We help companies turn technology plans into dependable products.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            TechNova Solutions began as a small team of product engineers and
            cloud consultants who believed that digital transformation should
            feel structured, transparent, and useful. Today, the company partners
            with growing organizations to design platforms, improve workflows,
            and launch reliable customer experiences.
          </p>
        </div>

        <div className="grid gap-6">
          <div className="glass-panel rounded-2xl p-7">
            <div className="mb-5 h-1.5 w-16 rounded-full bg-primary" />
            <h2 className="text-2xl font-semibold text-slate-950">Mission</h2>
            <p className="mt-3 leading-7 text-slate-600">
              To deliver thoughtful technology solutions that improve business
              performance and make complex systems easier for teams to use.
            </p>
          </div>
          <div className="glass-panel rounded-2xl p-7">
            <div className="mb-5 h-1.5 w-16 rounded-full bg-accent" />
            <h2 className="text-2xl font-semibold text-slate-950">Vision</h2>
            <p className="mt-3 leading-7 text-slate-600">
              To become a trusted innovation partner for organizations that want
              modern software, resilient infrastructure, and clear digital
              strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
