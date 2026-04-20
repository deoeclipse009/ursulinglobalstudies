import type { Metadata } from "next";
import { getSortedUpdates, upcomingEvents } from "@/content/updates";
import { UpdatesPageContent } from "@/components/updates-page-content";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Recruitment, upcoming events, and what the UGS team is working on.",
};

export default function UpdatesPage() {
  const updates = getSortedUpdates();
  return <UpdatesPageContent updates={updates} upcomingEvents={upcomingEvents} />;
}
