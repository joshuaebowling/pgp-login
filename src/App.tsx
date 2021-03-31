import "./styles.css";
import React, { useState, useContext, useEffect } from "react";
import useWizard from "./useWizard";
import PublicKey from "./PublicKey";
import ShowChallenge from "./ShowChallenge";
import StepLabels from "./StepLabels";
import StepLabel from "./StepLabel";
import Response from "./Response";
import { StepType, IStep, AppState, setAppStateArgs } from "./Types";
import { AppContext, CurrentStepContext } from "./Contexts";

const defaultAppState: AppState = {
  publicKey: "",
  challenge: "",
  challengeRaw: ""
};

export default function App() {
  const steps: Array<IStep> = [
    { number: 1, name: "PublicKey", label: "Public Key", content: PublicKey },
    {
      number: 2,
      name: "Challenge",
      label: "Challenge",
      content: ShowChallenge
    },
    { number: 3, name: "Response", label: "Response", content: Response }
  ];
  const [currentStepData, setCurrentStepData] = useState<IStep>(steps[0]);
  const { WizardItem, currentStep, jump } = useWizard();
  const [appState, setAppState] = useState<AppState>(defaultAppState);
  const updateAppState = (args: setAppStateArgs) => {
    console.log("called update appstate", args);
    appState[args.key] = args.value;
    setAppState(Object.assign({}, appState));
  };
  useEffect(() => {
    setCurrentStepData(steps.find((x) => x.number === currentStep));
  }, [currentStep]);

  return (
    <>
      <h1>openpgp.js does not work in codesandbox</h1>
      <h4>
        {" "}
        see{" "}
        <a href="https://codesandbox.io/s/openpgpjs-does-not-work-in-code-sandbox-6d32i">
          this
        </a>{" "}
        sandbox
      </h4>
      <p>
        I will continue this experiment and will post a link to a live site when
        complete
      </p>
      <StepLabels>
        {steps.map((s, i) => (
          <StepLabel
            name={s.label}
            stepNumber={s.number}
            currentStep={currentStep}
            key={i}
          />
        ))}
      </StepLabels>
      <CurrentStepContext.Provider value={currentStepData}>
        <AppContext.Provider value={{ set: updateAppState, state: appState }}>
          {steps.map((step) => {
            return (
              <WizardItem number={step.number} StepContent={step.content} />
            );
          })}
          <h3>AppState</h3>
          <pre>{JSON.stringify(appState, null, 2)}</pre>
          <h3>CurrentStep</h3>
          <pre>{JSON.stringify(currentStepData, null, 2)}</pre>
        </AppContext.Provider>
      </CurrentStepContext.Provider>
    </>
  );
}
