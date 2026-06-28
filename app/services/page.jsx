import { ServiceCard } from "@/components/service-card";
import { Code2, Database, LineChart, ServerCog } from "lucide-react";

export const dynamic = "force-static";

const services = [
  {
    title: "Custom Web Applications",
    description:
      "Responsive applications built with maintainable architecture and polished user interfaces.",
    icon: Code2,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Deployment, monitoring, and hosting environments designed for reliability and scale.",
    icon: ServerCog,
  },
  {
    title: "Data Platforms",
    description:
      "Structured data systems that make reporting, automation, and integration easier.",
    icon: Database,
  },
  {
    title: "Digital Consulting",
    description:
      "Technology planning sessions that align product goals with practical delivery steps.",
    icon: LineChart,
  },
];

export default function ServicesPage() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            End-to-end digital solutions for modern businesses
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Each service is designed to show reusable components, static
            rendering, and ShadCN Card usage in a clean App Router project.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
