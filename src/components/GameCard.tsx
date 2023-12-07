import { Card, CardBody, Image } from "@nextui-org/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticsScore from "./CriticsScore";
import getCroppedImageUrl from "../services/image-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const imageUrl = getCroppedImageUrl(game.background_image);
  console.log(imageUrl);

  return (
    <Card className="max-w-[400px]">
      <CardBody className="overflow-visible p-0">
        <Image className="object-cover rounded-sm" src={imageUrl} />
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
