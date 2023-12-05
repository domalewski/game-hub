import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 gap-4">
        <div className="hidden lg:flex">aside</div>
        <div>
          <GameGrid />
        </div>
      </div>
    </>
  );
}
