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
  requirements: string;
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
      <div className="flex flex-col items-center text-center">
        <p className="pb-3">{desiredLicense.description}</p>

        <ul className="list-disc list-inside">
          {desiredLicense.requirements
            .split("<bulletpoint>")
            .map((requirementGroup, index) =>
              requirementGroup.trim() ? (
                <li key={index}>
                  {requirementGroup.includes("<nestedbulletpoint>") ? (
                    <>
                      {requirementGroup
                        .split("<nestedbulletpoint>")
                        .map((nestedRequirement, nestedIndex) =>
                          nestedRequirement.trim() ? (
                            nestedIndex === 0 ? (
                              nestedRequirement.trim()
                            ) : (
                              <ul
                                key={nestedIndex}
                                className="list-disc list-inside nested-list"
                              >
                                <li>{nestedRequirement.trim()}</li>
                              </ul>
                            )
                          ) : null
                        )}
                    </>
                  ) : (
                    requirementGroup.trim()
                  )}
                </li>
              ) : null
            )}
        </ul>

        <div className="flex pt-3">
          <div className="font-semibold">Strictness Rank:</div>
          &nbsp;{desiredLicense.strictness}
        </div>
        <div className="flex">
          <div className="font-semibold">Strictness Points:</div>
          &nbsp;{desiredLicense.strictness_points}
        </div>
        <div className="flex">
          <div className="font-semibold">Popularity Rank:</div>
          &nbsp;{desiredLicense.popularity}
        </div>
      </div>
      <div className="flex">
        <p className="font-semibold">Source:&nbsp;</p>
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
