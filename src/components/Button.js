import React from "react";

function ActionButton({ disabled, onClickFunction, children }) {
  const onClickHandler = () => {
    onClickFunction();
  };
  return (
    <button disabled={disabled} onClick={onClickHandler}>
      {children}
    </button>
  );
}

export default ActionButton;
