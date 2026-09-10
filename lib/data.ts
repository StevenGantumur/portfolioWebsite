import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  videoUrl?: string;
  heroImage?: string;
  order?: number;
  content: string;
};

const projectsDirectory = path.join(process.cwd(), "content", "projects");

export const projects: Project[] = fs
  .readdirSync(projectsDirectory)
  .filter((filename) => filename.endsWith(".md"))
  .map((filename) => {
    const fullPath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
      slug: data.slug ?? filename.replace(/\.md$/, ""),
      title: data.title,
      description: data.description ?? "",
      stack: data.stack ?? [],
      github: data.github ?? "",
      demo: data.demo ?? "",
      videoUrl: data.videoUrl ?? "",
      heroImage: data.heroImage ?? "",
      order: data.order ?? 999,
      content,
    };
  })
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

export type Note = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  content: string;
};

const notesDirectory = path.join(process.cwd(), "content", "notes");

export const notes: Note[] = fs
  .readdirSync(notesDirectory)
  .filter((filename) => filename.endsWith(".md"))
  .map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fullPath = path.join(notesDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      tags: data.tags ?? [],
      summary: data.summary ?? "",
      content,
    };
  })
  .sort((a, b) => b.date.localeCompare(a.date));

// Assets that may not be dropped into /public yet. Checked at build time so a
// missing file degrades gracefully instead of rendering a broken image/link.
const publicDirectory = path.join(process.cwd(), "public");

export const hasAsset = (filename: string): boolean =>
  fs.existsSync(path.join(publicDirectory, filename));

export const hasHeadshot = hasAsset("headshot.jpg");
export const hasResume = hasAsset("resume.pdf");
