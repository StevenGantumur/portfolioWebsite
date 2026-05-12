import Link from "next/link";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects",
  description: "Full-stack and ML projects I've built.",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <p className="text-sm font-mono mb-3" style={{ color: "var(--accent-light)" }}>
        what I&apos;ve built
      </p>
      <h1 className="text-5xl font-bold mb-12" style={{ color: "var(--text-primary)" }}>
        Projects
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
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
              className="w-full aspect-video relative"
              style={{
                background: project.heroImage
                  ? `url(${project.heroImage}) center/cover no-repeat`
                  : "linear-gradient(135deg, rgba(124, 58, 237, 0.25), rgba(99, 102, 241, 0.15))",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {!project.heroImage && (
                <div
                  className="absolute inset-0 flex items-center justify-center text-xs font-mono"
                  style={{ color: "var(--accent-light)" }}
                >
                  no image yet
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col gap-4 flex-1">
              <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
                {project.title}
              </h2>

              <p className="text-sm flex-1" style={{ color: "var(--text-muted)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(124, 58, 237, 0.15)",
                      color: "var(--accent-light)",
                      border: "1px solid rgba(124, 58, 237, 0.25)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
