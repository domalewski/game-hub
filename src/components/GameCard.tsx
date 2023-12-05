import { Card, CardBody, Image } from "@nextui-org/react";
import { Game } from "../hooks/useGames";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <CardBody className="overflow-visible p-0">
        <Image
          alt="Card background"
          className="object-cover rounded-sm"
          src={game.background_image}
          width={270}
        />
        <div className="flex flex-col">
          <p className="text-md">{game.name}</p>
        </div>
      </CardBody>
    </Card>
  );
};

export default GameCard;
