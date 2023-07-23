import Link from "next/link";
import logo from "./images/licenses logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex items-center">
      <Link className="flex mb-6" href="/">
        <Image src={logo} width={150} height={150} alt="logo"></Image>
        <h1 className="text-3xl font-semibold text-color-[#2a62db]">
          GitHub Licenses Simplified
        </h1>
      </Link>
      <Link className="text-stone-600 underline text-base" href="/definitions">
        Definitions
      </Link>
    </div>
  );
}
