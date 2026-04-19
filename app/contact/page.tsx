import type { Metadata } from "next";
import { Instagram, Mail, Lightbulb } from "lucide-react";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a story tip, question, or want to collaborate? Get in touch with UGS.",
};

export default function ContactPage() {
  return (
    <div className="container py-14 sm:py-20">
      <header className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-brand">
          Contact
        </p>
        <h1 className="text-4xl font-bold leading-tight text-ink sm:text-5xl">
          Get in touch.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text sm:text-lg">
          Have a story tip, question, or want to collaborate? We'd love to hear
          from you.
        </p>
      </header>

      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Connect */}
        <div>
          <h2 className="mb-5 text-xl font-semibold text-ink">Connect with us</h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://instagram.com/ursulin.globalstudies"
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-paper p-4 transition-all hover:border-brand/30 hover:shadow-md focus-brand"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-paper">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Instagram</p>
                  <p className="text-xs text-ink/60">@ursulin.globalstudies</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@ugs.edu"
                className="group flex items-center gap-4 rounded-xl border border-ink/10 bg-paper p-4 transition-all hover:border-brand/30 hover:shadow-md focus-brand"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-paper">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Email</p>
                  <p className="text-xs text-ink/60">hello@ugs.edu</p>
                </div>
              </a>
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-warn/40 bg-warn/20 p-5">
            <div className="mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-ink" />
              <h3 className="text-sm font-semibold text-ink">Story tips</h3>
            </div>
            <p className="text-sm leading-relaxed text-text">
              Have a story we should cover? Send tips to{" "}
              <a
                href="mailto:tips@ugs.edu"
                className="font-semibold text-brand underline decoration-brand/30 underline-offset-2 hover:decoration-brand"
              >
                tips@ugs.edu
              </a>
              .
            </p>
          </div>
        </div>

        {/* Form */}
        <div>
          <h2 className="mb-5 text-xl font-semibold text-ink">Send a message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
