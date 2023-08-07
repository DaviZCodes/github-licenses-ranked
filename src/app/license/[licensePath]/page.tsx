import { licensesObj } from "@/app/constants";

interface LicensePageProps {
  params: {
    licensePath: string;
  };
}

export default function SingleLicensePage({ params }: LicensePageProps) {
  const { licensePath } = params; //get the URL path

  return (
    <div className="min-h-screen text-center">
      <div className="text-xl sm:text-2xl font-semibold">{licensePath}</div>
      <div>Source:</div>
    </div>
  );
}
