interface LicenseCardProps {
  name: string;
}

const LicenseCard: React.FC<LicenseCardProps> = ({ name }) => {
  return <div className="border bg-custom-blue">{name}</div>;
};

export default LicenseCard;
