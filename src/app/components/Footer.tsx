import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex justify-center gap-5">
      <BsGithub size={50} color="#2a62db" />
      <p>
        Developed by
        <Link href="https://github.com/DaviZCodes"> DaviZCodes</Link>
      </p>
    </div>
  );
}
