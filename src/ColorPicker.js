import React from "react";
import { CirclePicker } from "react-color";
function ColorPicker({ handleSelectedColorChange }) {
  const handleChangeComplete = (color) => {
    handleSelectedColorChange(color.hex);
  };

  return (
    <div className="colorPicker center">
      <CirclePicker onChangeComplete={handleChangeComplete} />
    </div>
  );
}

export default ColorPicker;