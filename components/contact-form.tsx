"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";

export function ContactForm() {
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
    // Log to console so dev can verify — brief says no backend needed.
    // eslint-disable-next-line no-console
    console.log("[UGS contact form]", payload);

    // Also open a mailto draft so it actually goes somewhere.
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
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" required placeholder="Your name" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us what's on your mind..."
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
            <Check className="h-4 w-4" /> Sent — check your mail client
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </form>
  );
}
