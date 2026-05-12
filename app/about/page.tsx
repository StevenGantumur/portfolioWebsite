export const metadata = {
  title: "About",
  description: "About me — software engineer and CS&E student at Ohio State.",
};

export default function AboutPage() {
  const skills = ["Python", "React", "Next.js", "TypeScript", "Node.js", "SQL", "Machine Learning"];

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 space-y-12">
      <div>
        <p className="text-sm font-mono mb-3" style={{ color: "var(--accent-light)" }}>
          who I am
        </p>
        <h1 className="text-5xl font-bold" style={{ color: "var(--text-primary)" }}>
          About
        </h1>
      </div>

      <section
        className="rounded-2xl p-6 space-y-4 text-sm leading-relaxed"
        style={{
          background: "var(--bg-surface)",
          border: "1px solid var(--border)",
          color: "var(--text-muted)",
        }}
      >
        <p>
          Hey, I&apos;m Steven — a software engineer and student who enjoys building things that do stuff.
          I&apos;m currently studying Computer Science & Engineering, taking courses like Discrete Mathematics and learning C in Systems 1,
          and spending the rest of my time building projects that mix full-stack development with machine learning.
        </p>
        <p>
          Outside of code, I play volleyball and try to stay curious about anything I haven&apos;t figured out yet.
          This site is where I document what I&apos;m building, learning, and thinking about.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: "rgba(124, 58, 237, 0.15)",
                color: "var(--accent-light)",
                border: "1px solid rgba(124, 58, 237, 0.25)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
          Currently
        </h2>
        <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
          <li>→ Finishing the Woodman&apos;s Cart Corral Tracker (full-stack + ML).</li>
          <li>→ Attempting a 4.0 this semester.</li>
          <li>→ Writing notes on what I&apos;m learning along the way.</li>
          <li>→ Working on a new Baby Monitor project that involves customizable danger zones and AI surveillance.</li>
          <li>→ Losing weight to play volleyball at a more competitive level.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
          Contact & Links
        </h2>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          Best way to reach me is through my email:{" "}
          <a
            href="mailto:GantumurSteven@gmail.com"
            style={{ color: "var(--accent-light)" }}
            className="hover:underline"
          >
            GantumurSteven@gmail.com
          </a>
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="https://github.com/StevenGantumur"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-2 rounded-full"
            style={{
              background: "rgba(124, 58, 237, 0.2)",
              color: "var(--accent-light)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
            }}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/CHANGE-ME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-4 py-2 rounded-full"
            style={{
              background: "rgba(124, 58, 237, 0.2)",
              color: "var(--accent-light)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
            }}
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-xs px-4 py-2 rounded-full"
            style={{
              background: "rgba(124, 58, 237, 0.2)",
              color: "var(--accent-light)",
              border: "1px solid rgba(124, 58, 237, 0.3)",
            }}
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
          Off the Computer and On the Court
        </h2>
        <p className="text-sm" style={{ color: "var(--text-muted)" }}>
          If you really care, this is a clip of me playing some casual volleyball at the prestigious gym at tOSU! I tend to get really competititve so this is a cool clip!
        </p>
        <video
          src="/volleyball.mp4"
          controls
          className="w-full rounded-2xl"
          style={{ border: "1px solid var(--border)" }}
        />
      </section>
    </main>
  );
}
