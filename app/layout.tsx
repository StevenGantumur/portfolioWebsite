import Link from "next/link";
import "./globals.css";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: {
    default: "Steven Gantumur",
    template: "%s — Steven Gantumur",
  },
  description: "Computer Science & Engineering student at Ohio State, building full-stack and ML projects.",
};

export default function RootLayout ({
  children,

}: {
  children: React.ReactNode;

}) {
  return (
    <html lang="en">
      <body>
        <div style={{ position: "fixed", inset: 0, zIndex: -1, overflow: "hidden" }}>
          {/* Radial glows — all 4 corners */}
          <div style={{
            position: "absolute", top: "-20%", right: "-10%",
            width: "600px", height: "600px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)",
          }} />
          <div style={{
            position: "absolute", bottom: "-20%", left: "-10%",
            width: "600px", height: "600px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.10) 0%, transparent 70%)",
          }} />
          <div style={{
            position: "absolute", top: "-20%", left: "-10%",
            width: "500px", height: "500px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.07) 0%, transparent 70%)",
          }} />
          <div style={{
            position: "absolute", bottom: "-20%", right: "-10%",
            width: "500px", height: "500px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.07) 0%, transparent 70%)",
          }} />

          {/* Concentric rings — centered */}
          {[200, 380, 560, 740, 920, 1100].map((size) => (
            <div key={size} style={{
              position: "absolute", top: "50%", left: "50%",
              width: `${size}px`, height: `${size}px`,
              borderRadius: "50%",
              border: "1px solid rgba(124, 58, 237, 0.08)",
              transform: "translate(-50%, -50%)",
            }} />
          ))}

          {/* Faint cross lines through center */}
          <div style={{
            position: "absolute", top: "50%", left: 0,
            width: "100%", height: "1px",
            background: "linear-gradient(to right, transparent, rgba(124, 58, 237, 0.08), transparent)",
          }} />
          <div style={{
            position: "absolute", top: 0, left: "50%",
            width: "1px", height: "100%",
            background: "linear-gradient(to bottom, transparent, rgba(124, 58, 237, 0.08), transparent)",
          }} />

          {/* Corner triangles */}
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: "400px", height: "400px",
            background: "rgba(124, 58, 237, 0.05)",
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }} />
          <div style={{
            position: "absolute", bottom: 0, left: 0,
            width: "400px", height: "400px",
            background: "rgba(99, 102, 241, 0.05)",
            clipPath: "polygon(0 0, 0 100%, 100% 100%)",
          }} />
          <div style={{
            position: "absolute", top: 0, left: 0,
            width: "400px", height: "400px",
            background: "rgba(99, 102, 241, 0.04)",
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }} />
          <div style={{
            position: "absolute", bottom: 0, right: 0,
            width: "400px", height: "400px",
            background: "rgba(124, 58, 237, 0.04)",
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          }} />

        </div>

        <nav style={{
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-base)",
        }}>
          <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" style={{ color: "var(--text-primary)" }} className="font-bold text-lg nav-name">
              Steven Gantumur
            </Link>
            <div className="flex gap-2">
              <Link href="/projects" className="px-4 py-2 rounded-full text-sm transition-colors duration-200 nav-link"
                style={{ color: "white" }}>
                Projects
              </Link>
              <Link href="/notes" className="px-4 py-2 rounded-full text-sm transition-colors duration-200 nav-link"
                style={{ color: "white" }}>
                Notes
              </Link>
              <Link href="/about" className="px-4 py-2 rounded-full text-sm transition-colors duration-200 nav-link"
                style={{ color: "white" }}>
                About
              </Link>
            </div>
          </div>
        </nav>


        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
