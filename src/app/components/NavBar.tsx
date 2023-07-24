import Link from "next/link";
import logo from "./images/licenses logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex items-center mb-10">
      <Link href="/" className=" flex items-center">
        <Image src={logo} width={60} height={60} alt="logo"></Image>
        <h1 className="text-3xl font-semibold text-custom-blue ml-3">
          Licenses Made Easy
        </h1>
      </Link>
      <div className="flex ml-auto items-center">
        <Link
          className="text-stone-600 hover:underline text-base"
          href="/definitions"
        >
          Definitions
        </Link>
      </div>
    </div>
  );
}
