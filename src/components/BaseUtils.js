import React from "react";
import { FunctionalButtonWrapper } from "../elements";
export const FunctionalButton = ({
  children,
  icon,
  type,
  variant,
  numbers,
  onClick,
}) => {
  return (
    <FunctionalButtonWrapper type={type} variant={variant} onClick={onClick}>
      {icon !== undefined ? icon : null}
      {numbers !== undefined
        ? `${numbers[1]}/${numbers[0]} ${children}`
        : children}
    </FunctionalButtonWrapper>
  );
};
