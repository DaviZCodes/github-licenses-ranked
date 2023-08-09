import { licensesObj } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";

interface LicensePageProps {
  params: {
    licensePath: string;
  };
}

export default function SingleLicensePage({ params }: LicensePageProps) {
  const { licensePath } = params; //get the URL path

  const desiredPath = "/" + licensePath;

  const desiredLicense = licensesObj.find(
    (license) => license.path === desiredPath
  );

  if (!desiredLicense) {
    return (
      <div className="font-bold text-red-600">
        Error 404. Failed to find License. Please try another license.
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
