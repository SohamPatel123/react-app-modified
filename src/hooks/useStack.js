import { useState } from "react";
export const useStack = (initialValue) => {
  const [stack, setStack] = useState(initialValue);

  const pop = () => {
    if (stack.length === 0) return;
    setStack((prevState) => {
      const newState = [...prevState];
      newState.pop();
      return newState;
    });
  };
  const push = (newElement) => {
    setStack((prevState) => {
      const newState = [...prevState];
      newState.push(newElement);
      return newState;
    });
  };

  const top = () => {
    return stack[stack.length - 1];
  };

  const length = () => {
    return stack.length;
  };

  const clear = () => {
    setStack([]);
  };

  return {
    pop,
    push,
    clear,
    top,
    length,
  };
};