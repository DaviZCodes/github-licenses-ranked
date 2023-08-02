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
        <div>
          <Image
            src={
              "https://i.pinimg.com/736x/b4/06/dd/b406dd9617bde411b761778c5c99cfc2--nerd-metal.jpg"
            }
            width={100}
            height={100}
            alt={`${name} image`}
          />
        </div>
        {name}
      </Link>
    </div>
  );
};

export default LicenseCard;
