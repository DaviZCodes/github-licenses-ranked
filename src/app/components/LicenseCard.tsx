import Image from "next/image";
import Link from "next/link";

interface LicenseCardProps {
  name: string;
  path: string;
}

const LicenseCard: React.FC<LicenseCardProps> = ({ name, path }) => {
  return (
    <div className="border bg-custom-blue cursor-pointer">
      <Link href={`license/${path}`}>
        <Image src={""} width={100} height={100} alt={`${name} image`} />
        {name}
      </Link>
    </div>
  );
};

export default LicenseCard;
