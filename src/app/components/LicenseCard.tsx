import Image from "next/image";

interface LicenseCardProps {
  name: string;
}

const LicenseCard: React.FC<LicenseCardProps> = ({ name }) => {
  return (
    <div className="border bg-custom-blue cursor-pointer">
      <Image
        src={
          "https://drive.google.com/uc?export=view&id=14vrGk8NhuNqxFrL_y3GlBsKskkchXOfe"
        }
        width={100}
        height={100}
        alt="License image"
      />
      {name}
    </div>
  );
};

export default LicenseCard;
