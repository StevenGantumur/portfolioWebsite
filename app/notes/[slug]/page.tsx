import Link from "next/link";
import { notes } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <Link href="/notes" className="text-sm underline">
        ← Back to Notes
      </Link>

      <header>
        <h1 className="text-3xl font-bold">{note.title}</h1>
        <p className="text-sm text-gray-500">{note.date}</p>
      </header>

      <article className="space-y-4">
        {note.content.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </article>
    </main>
  );
}
