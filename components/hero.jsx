import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(14,165,233,0.28),transparent_38%,rgba(20,184,166,0.24))]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
      <div className="section-shell relative grid gap-12 py-20 lg:grid-cols-[1fr_0.95fr] lg:py-24">
        <div className="flex flex-col justify-center">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-accent backdrop-blur">
            <Sparkles className="h-4 w-4" />
            TechNova Solutions
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Digital systems that feel sharp, fast, and built for growth.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We design modern web platforms, cloud systems, and data workflows
            for companies that need dependable digital growth.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-cyan-950/60">
          <Image
            src="/technova-hero.png"
            alt="Modern analytics workspace for TechNova Solutions"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
