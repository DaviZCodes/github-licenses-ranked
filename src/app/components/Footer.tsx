import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div>
      <BsGithub />
      <p>
        Developed by{" "}
        <Link href="https://github.com/DaviZCodes"> DaviZCodes</Link>
      </p>
    </div>
  );
}
