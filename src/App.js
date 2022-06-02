import "./css/App.css";
import { CirclePicker } from "react-color";
import Grid from "./Components/Grid/Grid.js";
import { useStack } from "./hooks/useStack";
import { useState, useEffect } from "react";
import Button from "./Components/Button.js";
import UndoButton from "./Components/UndoButton";
import RedoButton from "./Components/RedoButton";

function App() {
  const undoStack = useStack([]);
  const redoStack = useStack([]);
  const NUM_COLS=32, NUM_ROWS=32;

  const [matrix, setMatrix] = useState(() => {
    if (localStorage.getItem("matrix"))
      return JSON.parse(localStorage.getItem("matrix"));
    return Array.from({ length: NUM_ROWS * NUM_COLS }, () => "white");
  });

  const handleCellColorChange = ({ index, newColor }) => {
    setMatrix((prevState) => {
      const copy = [...prevState];
      copy[index] = newColor;
      return copy;
    });
  };

  const clearMatrix = () => {
    setMatrix(() => {
      return Array.from({ length: NUM_ROWS * NUM_COLS }, () => "white");
    });
  };

  useEffect(() => {localStorage.setItem("matrix", JSON.stringify(matrix));}, [matrix]);

  const [selectedColor, setselectedColor] = useState("white");
  const colorChangingPallete = (color) => {                                 // change color in pallete
    console.log(color.hex);
    setselectedColor(color.hex);
  };
  const resetGrid = () => {                 //reset grid
    clearMatrix();
    undoStack.clear();
    redoStack.clear();
  };

  return (
    <div className="App center">
      <CirclePicker className="circles center" onChangeComplete={colorChangingPallete} />
      <Grid
        selectedColor={selectedColor}
        matrix={matrix}
        handleCellColorChange={handleCellColorChange}
        undoStack={undoStack}
        redoStack={redoStack}
      /><div>
      <UndoButton
        undoStack={undoStack}
        handleCellColorChange={handleCellColorChange}
        redoStack={redoStack}
      />
      <RedoButton
        redoStack={redoStack}
        handleCellColorChange={handleCellColorChange}
        undoStack={undoStack}
      />
    </div>
      <div className="center">
        <Button onClickFunction={resetGrid} children="RESET"/>
      </div>
    </div>
  );
}

export default App;
