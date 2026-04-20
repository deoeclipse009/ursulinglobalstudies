"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function ContactForm() {
  const { t } = useLanguage();
  const [state, setState] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
    };
    // eslint-disable-next-line no-console
    console.log("[UGS contact form]", payload);

    const subject = encodeURIComponent(`UGS contact from ${payload.name}`);
    const body = encodeURIComponent(
      `${payload.message}\n\n— ${payload.name} (${payload.email})`,
    );
    window.location.href = `mailto:hello@ugs.edu?subject=${subject}&body=${body}`;

    setState("sent");
    form.reset();
    setTimeout(() => setState("idle"), 4000);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">{t("contact.form.name")}</Label>
        <Input id="name" name="name" required placeholder={t("contact.form.name.placeholder")} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">{t("contact.form.email")}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">{t("contact.form.message")}</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder={t("contact.form.message.placeholder")}
          className="min-h-[140px]"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={state === "sent"}
      >
        {state === "sent" ? (
          <>
            <Check className="h-4 w-4" /> {t("contact.form.sent")}
          </>
        ) : (
          t("contact.form.submit")
        )}
      </Button>
    </form>
  );
}
