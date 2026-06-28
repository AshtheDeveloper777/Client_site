"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactEmail = "hello@technovasolutions.com";

export function ContactForm() {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("");
      setError("Please complete all fields before sending.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus("");
      setError("Please enter a valid email address.");
      return;
    }

    const inquiry = {
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    };

    localStorage.setItem("technova-last-inquiry", JSON.stringify(inquiry));

    const subject = encodeURIComponent(`New project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setError("");
    setStatus("Your email app is opening with the message ready to send.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-2xl p-6 sm:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Name
          </label>
          <Input id="name" name="name" className="mt-2" placeholder="Your name" required />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            className="mt-2"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="text-sm font-medium text-slate-700">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            className="mt-2"
            placeholder="Tell us what you would like to build"
            required
          />
        </div>
        <Button type="submit" size="lg" className="w-full sm:w-fit">
          Send Message
        </Button>
        {error ? (
          <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            {error}
          </p>
        ) : null}
        {status ? (
          <p className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-secondary">
            {status}
          </p>
        ) : null}
      </div>
    </form>
  );
}
