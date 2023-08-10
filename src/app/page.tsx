"use client";
import { useState } from "react";
import LicenseCard from "./components/LicenseCard";
import SortDropdown from "./components/SortDropdown";
import { licensesObj } from "./constants";

export default function Home() {
  const [sortedLicenses, setSortedLicenses] = useState([...licensesObj]);

  const onSortChange = (selectedOption: string) => {
    let sortedLicenses = [...licensesObj];

    if (selectedOption === "most-popular") {
      sortedLicenses.sort(
        (a, b) => (a.popularity as number) - (b.popularity as number)
      );
    } else if (selectedOption === "least-popular") {
      sortedLicenses.sort(
        (a, b) => (b.popularity as number) - (a.popularity as number)
      );
    } else if (selectedOption === "most-strict") {
      sortedLicenses.sort(
        (a, b) => (a.strictness as number) - (b.strictness as number)
      );
    } else if (selectedOption === "least-strict") {
      sortedLicenses.sort(
        (a, b) => (b.strictness as number) - (a.strictness as number)
      );
    }

    setSortedLicenses(sortedLicenses);
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center sm:flex sm:flex-row gap-3">
        <SortDropdown onSortChange={onSortChange} />
        <div className="flex justify-center text-sm">
          14 (Lowest) - 1 (Highest)
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 w-full md:grid-cols-2 lg:grid-cols-3 2xl:gap-3">
        {sortedLicenses.map((license) => (
          <LicenseCard
            key={license.name}
            name={license.name}
            path={license.path}
            image={license.image}
            strictness={license.strictness}
            popularity={license.popularity!}
          />
        ))}
      </div>
    </div>
  );
}
