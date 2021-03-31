import React, { useContext } from "react";
import { AppContext } from "./Contexts";

const Component: React.FunctionComponent<{
  next: () => void;
  prev: () => void;
  currentStep: number;
}> = ({ next, prev, currentStep }) => {
  const { set, state } = useContext(AppContext);
  const onNext = () => {
    console.log("call challenge creation here");
    next();
  };
  return (
    <div>
      <h1>Paste Public Key</h1>
      <textarea
        value={state?.publicKey}
        onChange={(e) => set({ key: "publicKey", value: e.target.value })}
      />
      <div>
        <small>Paste in your public key, then </small>
        <button onClick={onNext}>Receive Challenge</button>
      </div>
      <div></div>
    </div>
  );
};

export default Component;
