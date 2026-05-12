import Link from "next/link";
import { marked } from "marked";
import { projects } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-24 space-y-8">
      <Link
        href="/projects"
        className="inline-block text-xs px-4 py-2 rounded-full transition-colors duration-200"
        style={{
          background: "rgba(124, 58, 237, 0.15)",
          color: "var(--accent-light)",
          border: "1px solid rgba(124, 58, 237, 0.25)",
        }}
      >
        ← Back to Projects
      </Link>

      <header className="space-y-4">
        <h1 className="text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
          {project.title}
        </h1>
        <p className="text-base" style={{ color: "var(--text-muted)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
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

        <div className="flex gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-2 rounded-full transition-colors duration-200"
              style={{
                background: "rgba(124, 58, 237, 0.2)",
                color: "var(--accent-light)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
              }}
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-2 rounded-full transition-colors duration-200"
              style={{
                background: "rgba(124, 58, 237, 0.2)",
                color: "var(--accent-light)",
                border: "1px solid rgba(124, 58, 237, 0.3)",
              }}
            >
              Live Demo
            </a>
          )}
        </div>
      </header>

      {project.heroImage && (
        <img
          src={project.heroImage}
          alt={`${project.title} hero`}
          className="w-full rounded-2xl"
          style={{ border: "1px solid var(--border)" }}
        />
      )}

      {project.videoUrl && (
        <div
          className="w-full aspect-video rounded-2xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <iframe
            src={project.videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      <article
        className="rounded-2xl p-6 project-content text-sm leading-relaxed"
        style={{
          background: "var(--bg-surface)",
          border: "1px solid var(--border)",
          color: "var(--text-muted)",
        }}
        dangerouslySetInnerHTML={{ __html: await marked.parse(project.content) }}
      />
    </main>
  );
}
