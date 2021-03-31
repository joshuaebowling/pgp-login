import React, { useEffect, useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AppContext } from "./Contexts";
import { AppState } from "./Types";
import { random } from "./Utils";

const Component: React.FunctionComponent<{
  next: () => void;
  prev: () => void;
  currentStep: number;
}> = ({ next, prev, currentStep }) => {
  const { set, state } = useContext(AppContext);
  const [localState, setLocalState] = useState<AppState | null>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [linuxGodCommand, setLinuxGodCommand] = useState("");
  useEffect(() => {
    if (state?.publicKey !== localState?.publicKey) {
      let _challenge = random(20);
      // set({ key: "Challenge", value: _challenge });
      setLinuxGodCommand(`echo gpg --decrypt "${_challenge}"`);
    }

    setLocalState(Object.assign({}, state));
  }, [state]);
  return (
    <div>
      <h1 style={{ display: "inline-block" }}>Challenge:</h1>
      <small>decode using your private key</small>{" "}
      <p>
        If you use the linux terminal (which all computer gods clearly do, WSL
        does not count) then:
      </p>
      <code>{linuxGodCommand}</code>
      <CopyToClipboard text={linuxGodCommand} onCopy={() => setIsCopied(true)}>
        <button>Copy Terminal Command</button>
      </CopyToClipboard>
      <div>
        <CopyToClipboard text={""} onCopy={() => setIsCopied(true)}>
          <button>Copy</button>
        </CopyToClipboard>
        <button onClick={(e) => prev()}>{`<< Public Key`}</button>
        <button onClick={(e) => next()}>{`Respond >>`}</button>
      </div>
    </div>
  );
};

export default Component;
