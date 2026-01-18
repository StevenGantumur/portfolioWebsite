import Link from "next/link";

export default function RootLayout ({
  children,

}: {
  children: React.ReactNode;

}) {
  return (
    <html lang="en">
      <body>
        <nav className="border-b">
          <div className="max-w-4xl mx-auto p-4 flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/notes">Notes</Link>
            <Link href="/about">About</Link>
          </div>
        </nav>


        {children}
      </body>
    </html>
  )
}