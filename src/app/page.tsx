import LicenseCard from "./components/LicenseCard";
import SortDropdown from "./components/SortDropdown";

const licensesObj = {
  "The Unlicense": "/the-unlicense",
};

export default function Home() {
  return (
    <div className="flex justify-center gap-3">
      <SortDropdown onSortChange={handleSortChange} />
      <div></div>
    </div>
  );
}
