import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center gap-3">
      <Link
        className="text-stone-600 underline text-base"
        href="https://github.com/DaviZCodes/github-licenses-simplified"
        target="_blank"
      >
        GitHub
      </Link>
      <Link className="text-stone-600 underline text-base" href="/definitions">
        Definitions
      </Link>
    </div>
  );
}
