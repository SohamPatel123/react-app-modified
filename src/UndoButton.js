import React from "react";
import Button from "./Button";

function UndoButton({ undoStack, handleCellColorChange, redoStack }) {
  const undoFunction = () => {
    const undoTop = undoStack.top();
    handleCellColorChange({
      index: undoTop.index,
      newColor: undoTop.color1,
    });
    redoStack.push(undoTop);
    undoStack.pop();
  };
  return (
    <Button disabled={undoStack.length() === 0} onClickFunction={undoFunction}>
    Undo
    </Button>
  );
}

export default UndoButton;  

