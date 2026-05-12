import Link from "next/link";
import { notes } from "@/lib/data";

export const metadata = {
  title: "Notes",
  description: "Notes on what I'm learning and building.",
};

export default function NotesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm font-mono mb-3" style={{ color: "var(--accent-light)" }}>
        what I&apos;m learning
      </p>
      <h1 className="text-5xl font-bold mb-12" style={{ color: "var(--text-primary)" }}>
        Notes
      </h1>

      <ul className="space-y-4">
        {notes.map((note) => (
          <li
            key={note.slug}
            className="rounded-2xl p-6 flex flex-col gap-3"
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
            }}
          >
            <Link href={`/notes/${note.slug}`}>
              <h2
                className="text-xl font-semibold hover:underline"
                style={{ color: "var(--text-primary)" }}
              >
                {note.title}
              </h2>
            </Link>

            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {note.date}
            </p>

            <div className="flex flex-wrap gap-2">
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

            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              {note.summary}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
