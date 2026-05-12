import Link from "next/link";
import { marked } from "marked";
import { notes } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return { title: "Note not found" };
  return {
    title: note.title,
    description: note.summary,
  };
}

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
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-8">
      <Link
        href="/notes"
        className="inline-block text-xs px-4 py-2 rounded-full transition-colors duration-200"
        style={{
          background: "rgba(124, 58, 237, 0.15)",
          color: "var(--accent-light)",
          border: "1px solid rgba(124, 58, 237, 0.25)",
        }}
      >
        ← Back to Notes
      </Link>

      <header className="space-y-3">
        <p className="text-sm font-mono" style={{ color: "var(--accent-light)" }}>
          {note.date}
        </p>
        <h1 className="text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
          {note.title}
        </h1>
        <div className="flex flex-wrap gap-2 pt-1">
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: "rgba(124, 58, 237, 0.15)",
                color: "var(--accent-light)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article
        className="rounded-2xl p-6 note-content text-sm leading-relaxed"
        style={{
          background: "var(--bg-surface)",
          border: "1px solid var(--border)",
          color: "var(--text-muted)",
        }}
        dangerouslySetInnerHTML={{ __html: await marked.parse(note.content) }}
      />
    </main>
  );
}
