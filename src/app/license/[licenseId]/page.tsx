interface LicensePageProps {
  params: {
    licenseName: string;
  };
}

export default function SingleLicensePage() {
  return (
    <div className="min-h-screen text-center">
      <div className="text-xl sm:text-2xl font-semibold">
        Single License Page
      </div>
      <div>Source:</div>
    </div>
  );
}
