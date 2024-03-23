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
          
          <Button setColor={setColor} btnColor = "Red"/>
          <Button setColor={setColor} btnColor = "Blue"/>
          <Button setColor={setColor} btnColor = "Green"/>
          <Button setColor={setColor} btnColor = "Olive"/>
          <Button setColor={setColor} btnColor = "Gray"/>
          <Button setColor={setColor} btnColor = "Yellow"/>
          <Button setColor={setColor} btnColor = "Pink"/>
          <Button setColor={setColor} btnColor = "Purple"/>
          <Button setColor={setColor} btnColor = "Lavender"/>
          <Button setColor={setColor} btnColor = "White"/>
          <Button setColor={setColor} btnColor = "Black"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
