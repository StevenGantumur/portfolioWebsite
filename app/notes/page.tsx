import Link from "next/link";
import { notes } from "@/lib/data";

export default function NotesPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Notes</h1>
        <p className="text-gray-600">
          Short writeups on what I’m learning.
        </p>
      </div>

      <ul className="space-y-4">
        {notes.map((note) => (
          <li key={note.slug} className="border rounded p-4">
            <Link href={`/notes/${note.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {note.title}
              </h2>
            </Link>

            <p className="text-sm text-gray-500">{note.date}</p>
            <p className="text-gray-600 mt-2">{note.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
