"use client";
import LicenseCard from "./components/LicenseCard";
import SortDropdown from "./components/SortDropdown";

const licensesObj = [
  {
    name: "The Unlicense",
    path: "/unlicense",
    strictness: 1,
    popularity: 7,
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    path: "/cc0",
    strictness: 2,
    popularity: 12,
  },
  {
    name: "MIT License",
    path: "/mit",
    strictness: 3,
    popularity: 1,
  },
  {
    name: "Boost Software License 1.0 ",
    path: "/bsl1",
    strictness: 4,
    popularity: 13,
  },
  {
    name: 'BSD 2-Clause \\"Simplified\\" License',
    path: "/the-unlicense",
    strictness: 5,
    popularity: 8,
  },
  {
    name: 'BSD 3-Clause \\"New" or "Revised"\\ Licensen',
    path: "/the-unlicense",
    strictness: 1,
    popularity: 7,
  },
  {
    name: "The Unlicense",
    path: "/the-unlicense",
    strictness: 1,
    popularity: 7,
  },
  {
    name: "The Unlicense",
    path: "/the-unlicense",
    strictness: 1,
    popularity: 7,
  },
  {
    name: "The Unlicense",
    path: "/the-unlicense",
    strictness: 1,
    popularity: 7,
  },
  {
    name: "The Unlicense",
    path: "/the-unlicense",
    strictness: 1,
    popularity: 7,
  },
  {
    name: "The Unlicense",
    path: "/the-unlicense",
    strictness: 1,
    popularity: 7,
  },
  {
    name: "The Unlicense",
    path: "/the-unlicense",
    strictness: 1,
    popularity: 7,
  },
  {
    name: "The Unlicense",
    path: "/the-unlicense",
    strictness: 1,
    popularity: 7,
  },
  {
    name: "The Unlicense",
    path: "/the-unlicense",
    strictness: 1,
    popularity: 7,
  },
  {
    name: "None",
    path: "/none",
    strictness: 14,
    popularity: null,
  },
];

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
