import Link from "next/link";
import logo from "./images/licenses logo.png";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="flex items-center mb-2 sm:mb-3 lg:mb-10 py-1">
      <Link href="/" className=" flex items-center">
        <Image src={logo} width={60} height={60} alt="logo"></Image>
        <h1 className="text-sm sm:text-lg md:text-xl lg:text-3xl font-semibold text-custom-blue ml-3">
          Licenses Made Easy
        </h1>
      </Link>
      <div className="flex ml-auto items-center">
        <Link
          className="text-stone-600 text-bas border-2 p-1 md:p-2 rounded-3xl border-custom-blue bg-slate-50 hover:bg-gray-200 translate-y-[-5px]"
          href="/definitions"
        >
          Definitions
        </Link>
      </div>
    </div>
  );
}
