import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="hidden lg:flex flex-none">aside</div>
        <div className="flex-auto">
          <GameGrid />
        </div>
      </div>
    </>
  );
}
