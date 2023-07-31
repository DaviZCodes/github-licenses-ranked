"use client";
import LicenseCard from "./components/LicenseCard";
import SortDropdown from "./components/SortDropdown";
import { licensesObj } from "./constants";

const onSortChange = () => {};

export default function Home() {
  return (
    <div>
      <div className="flex justify-end">
        <SortDropdown onSortChange={onSortChange} />
      </div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-3 w-full h-96 md:grid-cols-2 lg:grid-cols-3">
          <LicenseCard />
          <LicenseCard />
          <LicenseCard />
          <LicenseCard />
          <LicenseCard />
          <LicenseCard />
        </div>
      </div>
    </div>
  );
}
