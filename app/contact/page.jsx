import { ContactForm } from "@/components/contact-form";

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Let&apos;s talk about your next technology project.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Share a few details and the TechNova Solutions team will respond
            with next steps for discovery, planning, and delivery.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
