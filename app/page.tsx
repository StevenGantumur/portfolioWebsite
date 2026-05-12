import Link from "next/link";
import { projects, notes } from "@/lib/data";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);
  const latestNotes = notes.slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <section
        className="min-h-screen flex flex-col justify-center max-w-4xl mx-auto px-6"
        style={{ paddingTop: "80px" }}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8">
          <img
            src="/headshot.jpg"
            alt="Steven Gantumur"
            className="w-40 h-40 rounded-full object-cover flex-shrink-0"
            style={{
              border: "2px solid var(--accent)",
              boxShadow: "0 0 30px rgba(124, 58, 237, 0.3)",
            }}
          />
          <div>
            <p className="text-sm font-mono mb-2" style={{ color: "var(--accent-light)" }}>
              Hey, I&apos;m
            </p>
            <h1
              className="text-6xl font-bold leading-tight"
              style={{
                background: "linear-gradient(to right, #a78bfa, #6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(2px 2px 0px #5b21b6) drop-shadow(4px 4px 0px #4c1d95) drop-shadow(6px 6px 0px #3b0764)",
              }}
            >
              Steven Gantumur
            </h1>
          </div>
        </div>

        <p
          className="text-2xl font-medium mb-4"
          style={{
            color: "var(--text-primary)",
            textShadow: "2px 2px 0px #3a3a5c, 4px 4px 0px #2a2a4a",
          }}
        >
          Computer Science & Engineering student @ Ohio State — building things, breaking things, asking Claude to fix them (sometimes).
        </p>
        <p className="text-lg" style={{ color: "var(--text-muted)" }}>
          Full stack dev with a soft spot for machine learning and volleyball.
        </p>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm font-mono mb-3" style={{ color: "var(--accent-light)" }}>
          featured work
        </p>
        <h2 className="text-3xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
          Selected Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-full aspect-video"
                style={{
                  background: project.heroImage
                    ? `url(${project.heroImage}) center/cover no-repeat`
                    : "linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(99, 102, 241, 0.15))",
                  borderBottom: "1px solid var(--border)",
                }}
              />
              <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>
                  {project.title}
                </h3>
                <p className="text-sm flex-1" style={{ color: "var(--text-muted)" }}>
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/projects"
          className="inline-block mt-6 text-sm hover:underline"
          style={{ color: "var(--accent-light)" }}
        >
          See all projects →
        </Link>
      </section>

      {/* LATEST NOTES */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-sm font-mono mb-3" style={{ color: "var(--accent-light)" }}>
          recent writing
        </p>
        <h2 className="text-3xl font-bold mb-8" style={{ color: "var(--text-primary)" }}>
          Latest Notes
        </h2>

        <ul className="space-y-3">
          {latestNotes.map((note) => (
            <li key={note.slug}>
              <Link
                href={`/notes/${note.slug}`}
                className="block rounded-2xl p-5"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-base font-semibold" style={{ color: "var(--text-primary)" }}>
                    {note.title}
                  </h3>
                  <span className="text-xs font-mono flex-shrink-0" style={{ color: "var(--text-muted)" }}>
                    {note.date}
                  </span>
                </div>
                <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
                  {note.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/notes"
          className="inline-block mt-6 text-sm hover:underline"
          style={{ color: "var(--accent-light)" }}
        >
          See all notes →
        </Link>
      </section>
    </main>
  );
}
