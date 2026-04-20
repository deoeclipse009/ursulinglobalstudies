import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about-page-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ursulin Global Studies is a student community at SMA Regina Pacis Surakarta fostering global awareness through critical thinking, responsible research, and humanist publishing.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
