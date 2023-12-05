import React from "react";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <div className="grid grid-rows-2 grid-col-2 gap-4">
        <div className="col-span-2">
          <NavBar />
        </div>
        <div className="hidden lg:flex">aside</div>
        <div>main</div>
      </div>
    </>
  );
}
