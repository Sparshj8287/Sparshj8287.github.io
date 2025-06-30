"use client";

import {
  PrimaryButtonText,
  PrimaryButtonWrpr,
  SecondaryButtonText,
  SecondaryButtonWrpr,
  SpecialButtonText,
  SpecialButtonWrpr,
} from "./style";

export const PrimaryButton = ({ text, onClick }) => {
  return (
    <PrimaryButtonWrpr onClick={() => onClick()}>
      <PrimaryButtonText>{text}</PrimaryButtonText>
    </PrimaryButtonWrpr>
  );
};

export const SecondaryButton = ({ text, onClick }) => {
  return (
    <SecondaryButtonWrpr onClick={() => onClick()}>
      <SecondaryButtonText>{text}</SecondaryButtonText>
    </SecondaryButtonWrpr>
  );
};

export const SpecialButton = ({ text, onClick, color = "#ff0000" }) => {
  return (
    <SpecialButtonWrpr color={color} onClick={() => onClick()}>
      <SpecialButtonText color={color}>{text}</SpecialButtonText>
    </SpecialButtonWrpr>
  );
};
