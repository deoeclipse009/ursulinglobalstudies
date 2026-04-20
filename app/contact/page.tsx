import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact-page-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a story tip, question, or want to collaborate? Get in touch with UGS.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
