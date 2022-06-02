import React from "react";
import Cell from "./Cell";

function Grid({
  selectedColor,
  matrix,
  handleCellColorChange,
  undoStack,
  redoStack,
}) {
  return (
    <div className="grid-container">
      {matrix.map((value, index) => (
        <Cell
          key={index}
          backgroundColor={value}
          handleCellColorChange={handleCellColorChange}
          selectedColor={selectedColor}
          index={index}
          undoStack={undoStack}
          redoStack={redoStack}
        />
      ))}
    </div>
  );
}

export default Grid;
