import { createContext } from "react";
import { AppState, setAppStateArgs, IStep } from "./Types";

export const AppContext = createContext<{
  set: (state: setAppStateArgs) => void;
  state: AppState | null;
}>({
  set: (state) => console.log("not implemented"),
  state: { publicKey: "", challenge: "", challengeRaw: "" }
});

export const CurrentStepContext = createContext<IStep | null>(null);
