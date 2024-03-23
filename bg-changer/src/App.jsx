import { useState } from "react";
import Button from "./Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
     <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 shadow-lg rounded-2xl">
          
          <Button onClick={() => setColor("red")} btnColor = "Red"/>
          <Button onClick={() => setColor("blue")} btnColor = "Blue"/>
          <Button onClick={() => setColor("green")} btnColor = "Green"/>
          <Button onClick={() => setColor("olive")} btnColor = "Olive"/>
          <Button onClick={() => setColor("gray")} btnColor = "Gray"/>
          <Button onClick={() => setColor("yellow")} btnColor = "Yellow"/>
          <Button onClick={() => setColor("pink")} btnColor = "Pink"/>
          <Button onClick={() => setColor("purple")} btnColor = "Purple"/>
          <Button onClick={() => setColor("lavender")} btnColor = "Lavender"/>
          <Button onClick={() => setColor("white")} btnColor = "White"/>
          <Button onClick={() => setColor("black")} btnColor = "Black"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
