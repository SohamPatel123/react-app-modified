import React from "react";
import Button from "./Button";

function RedoButton({ undoStack, handleCellColorChange, redoStack }) {
  const redoFunction = () => {
    const redoTop = redoStack.top();
    handleCellColorChange({
      index: redoTop.index,
      newColor: redoTop.color2,
    });
    undoStack.push(redoTop);
    redoStack.pop();
  };
  return (
    <Button disabled={redoStack.length() === 0} onClickFunction={redoFunction}>
    Redo
    </Button>
  );
}

export default RedoButton;
