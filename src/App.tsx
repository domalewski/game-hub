import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenreList";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="hidden lg:flex flex-none">
          <GenereList />
        </div>
        <div className="flex-auto">
          <GameGrid />
        </div>
      </div>
    </>
  );
}
