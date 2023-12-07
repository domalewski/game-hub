import { Chip } from "@nextui-org/react";

interface CriticsScoreProps {
  score: number;
}

const CriticsScore = ({ score }: CriticsScoreProps) => {
  const color = score > 75 ? "success" : score > 60 ? "warning" : "default";

  return (
    <Chip color={color} variant="flat" radius="sm">
      {score}
    </Chip>
  );
};

export default CriticsScore;
