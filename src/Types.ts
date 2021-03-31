import React from "react";
export type StepType = "PublicKey" | "Challenge" | "Response";
export interface IStep {
  number: number;
  name: StepType;
  label: string;
  content: React.FunctionComponent<{
    next: () => void;
    prev: () => void;
    jump: (step: number) => void;
    currentStep: number;
  }>;
}

export type setAppStateArgs = {
  key: "publicKey" | "challenge" | "challengeRaw";
  value: string;
};

export interface AppState {
  publicKey: string;
  challenge: string;
  challengeRaw: string;
}
