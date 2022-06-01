import React, { useState } from "react";

function Cell({
  backgroundColor,
  index,
  handleCellColorChange,
  selectedColor,
  undoStack,
  redoStack,
}) {
  const [hoverColor, sethoverColor] = useState("white");

  const TileColorChange = () => {
    handleCellColorChange({ index, newColor: selectedColor });
    undoStack.push({ index, color1: backgroundColor, color2: selectedColor });
    redoStack.clear();
  };

  return (
    <div
      className="cell"
      onClick={TileColorChange}
      onMouseEnter={()=>{sethoverColor(selectedColor)}}
      onMouseLeave={()=>{sethoverColor("white")}}
      style={{
        backgroundColor: `${ hoverColor !== "white" ? hoverColor : backgroundColor }`,
      }}
    ></div>
  );
}

export default Cell;