import Image from "next/image";
import Link from "next/link";

interface LicenseCardProps {
  name: string;
  path: string;
  image: string;
  strictness: number;
  popularity: number | string;
}

const LicenseCard: React.FC<LicenseCardProps> = ({
  name,
  path,
  image,
  strictness,
  popularity,
}) => {
  return (
    <div className="relative border cursor-pointer rounded-lg">
      <Link href={`license/${path}`}>
        <div>
          <Image
            src={image}
            width={0}
            height={0}
            className="w-full h-full rounded-lg"
            sizes="100vh"
            alt={`${name} image`}
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 px-3 py-6 flex flex-col items-center justify-center gap-3 text-white bg-custom-blue font-semibold rounded-b-lg">
          <div className="text-xl">{name}</div>
          <div>
            Strictness: {strictness} || Popularity: {popularity}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LicenseCard;
