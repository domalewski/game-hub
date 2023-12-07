import { Card, CardBody, Image } from "@nextui-org/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticsScore from "./CriticsScore";

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
        />
        <div className="flex flex-col p-1">
          <p className="text-2xl">{game.name}</p>
          <div className="flex flex-row justify-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticsScore score={game.metacritic} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default GameCard;
