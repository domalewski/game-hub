import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-2.5">
          {skeletons.map((skeleton) => (
            <GameCardSkeleton key={skeleton} />
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-2.5">
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
