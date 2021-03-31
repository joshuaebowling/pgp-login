import React from "react";

const Component: React.FunctionComponent<{
  next: () => void;
  prev: () => void;
  currentStep: number;
}> = ({ next, prev, currentStep }) => {
  console.log("step");
  return (
    <div>
      <button onClick={(e) => prev()}>Back</button>
      <button onClick={(e) => next()}>Next</button>
    </div>
  );
};

export default Component;
