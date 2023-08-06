import Image from "next/image";
import Link from "next/link";

interface LicenseCardProps {
  name: string;
  path: string;
  strictness: number;
  popularity: number | string;
}

const LicenseCard: React.FC<LicenseCardProps> = ({
  name,
  path,
  strictness,
  popularity,
}) => {
  return (
    <div className="border bg-custom-blue cursor-pointer">
      <Link href={`license/${path}`}>
        <div className="overflow-hidden">
          <Image
            src={
              "https://i.pinimg.com/736x/b4/06/dd/b406dd9617bde411b761778c5c99cfc2--nerd-metal.jpg"
            }
            width={0}
            height={0}
            className="w-full h-full"
            sizes="100vh"
            alt={`${name} image`}
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="font-semibold">{name}</div>
          <div>Strictness: {strictness}</div>Popularity: {popularity}
        </div>
      </Link>
    </div>
  );
};

export default LicenseCard;
