import React from "react";

const Component: React.FunctionComponent<{
  next: () => void;
  prev: () => void;
  currentStep: number;
}> = ({ next, prev, currentStep }) => {
  console.log("step");
  return (
    <div>
      <h1>Were you successful?</h1>
      <small>this is where I need a jump</small>
      <button onClick={(e) => prev()}>Logout</button>
    </div>
  );
};

export default Component;
