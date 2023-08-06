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
    <div className="relative border cursor-pointer rounded-lg">
      <Link href={`license/${path}`}>
        <div>
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
