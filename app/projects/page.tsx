import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.title}
            className="border rounded p-4"
          >
            <h2 className="text-xl font-semibold">
              {project.title}
            </h2>
            <p className="text-gray-600">
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
