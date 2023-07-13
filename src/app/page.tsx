import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex justify-between mb-6">
      <h1 className="text-3xl font-semibold">GitHub Licenses Simplified</h1>
      </header>

      <footer>
        <div className="flex justify-center gap-3">
          <Link className= "text-stone-600 underline text-base" href = "/definitions"> GitHub</Link>
          <Link className= "text-stone-600 underline text-base" href = "/definitions"> Definitions </Link>
        </div>
      </footer>
    </main>
  )
}
