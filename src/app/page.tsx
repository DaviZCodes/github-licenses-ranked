"use client";
import LicenseCard from "./components/LicenseCard";
import SortDropdown from "./components/SortDropdown";
import { licensesObj } from "./constants";

const onSortChange = () => {};

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center sm:flex sm:flex-row gap-3">
        <SortDropdown onSortChange={onSortChange} />
        <div> 14 (Lowest) - 1 (Highest) </div>
      </div>
      <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-2 lg:grid-cols-3 2xl:gap-3">
        {licensesObj.map((license) => (
          <LicenseCard
            key={license.name}
            name={license.name}
            path={license.path}
            strictness={license.strictness}
            popularity={license.popularity!}
          />
        ))}
      </div>
    </div>
  );
}
