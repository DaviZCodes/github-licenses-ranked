import Link from "next/link";
import logo from "./images/licenses logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <header>
      <Link className="flex mb-6" href="/">
        <Image src={logo} width={150} height={150} alt="logo"></Image>
        <h1 className="text-3xl font-semibold text-blue-[550]">
          GitHub Licenses Simplified
        </h1>
      </Link>
    </header>
  );
}
