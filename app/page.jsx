import { FeatureCard } from "@/components/feature-card";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BarChart3, Cloud, ShieldCheck } from "lucide-react";

export const dynamic = "force-static";

const features = [
  {
    title: "Cloud Strategy",
    description:
      "Modern cloud roadmaps that help teams launch faster while keeping infrastructure clear and manageable.",
    icon: Cloud,
  },
  {
    title: "Secure Delivery",
    description:
      "Security-minded engineering practices built into every phase of planning, development, and deployment.",
    icon: ShieldCheck,
  },
  {
    title: "Growth Analytics",
    description:
      "Dashboards and reporting systems that turn product activity into practical business decisions.",
    icon: BarChart3,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              What we build
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Practical technology for ambitious teams
              </h2>
            </div>
            <p className="max-w-md text-slate-600">
              A static, component-first site that keeps Week 9 concepts clear
              while still looking like a real consulting brand.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-300/70 sm:p-10 lg:p-12">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.35),transparent_55%)]" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight">
              Ready to modernize your digital operations?
            </h2>
            <p className="mt-4 text-slate-300">
              TechNova Solutions helps companies plan, ship, and improve
              software with a calm, professional process.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">View services</Link>
            </Button>
          </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
