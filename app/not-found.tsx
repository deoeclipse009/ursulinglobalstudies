import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand">
        404
      </p>
      <h1 className="mt-3 text-4xl font-bold text-ink sm:text-5xl">
        This page got away from us.
      </h1>
      <p className="mt-4 max-w-md text-base text-text">
        The page you're looking for doesn't exist, or has been moved. Let's get
        you back to the stories.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild variant="brand">
          <Link href="/news">Read the news</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Go home</Link>
        </Button>
      </div>
    </div>
  );
}
