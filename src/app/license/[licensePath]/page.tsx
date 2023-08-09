import Image from "next/image";
import Link from "next/link";
import { licensesObj } from "@/app/constants";

interface LicensePageProps {
  params: {
    licensePath: string;
  };
}

interface ILicenseObj {
  name: string;
  path: string;
  src: string;
  image: string;
  description: string;
  strictness: number;
  strictness_points: number;
  popularity: number | string;
}

export default function SingleLicensePage({ params }: LicensePageProps) {
  const { licensePath } = params; //get the URL path

  const desiredPath = "/" + licensePath;

  //loop through the list to find the specific License Obj
  const desiredLicense: ILicenseObj | undefined = licensesObj.find(
    (license) => license.path === desiredPath
  );

  if (!desiredLicense) {
    return (
      <div className="font-bold text-red-600">
        Error 404. Failed to find license {licensePath}. Please try another
        license.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center text-center gap-3">
      <div className="text-xl sm:text-2xl font-semibold">
        {desiredLicense.name}
      </div>
      <div className="w-96 ">
        <Image
          src={desiredLicense.image}
          width={0}
          height={0}
          sizes="100vh"
          alt="License image"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col">
        <p>{desiredLicense.description}</p>
        <p>Strictness Rank: {desiredLicense.strictness}</p>
        <p>Strictness Points: {desiredLicense.strictness_points}</p>
        <p>Popularity rank: {desiredLicense.popularity}</p>
      </div>
      <div>
        Source:{" "}
        <Link
          href={desiredLicense.src}
          className=" underline text-custom-blue"
          target="_blank"
        >
          {desiredLicense.src}
        </Link>
      </div>
    </div>
  );
}
