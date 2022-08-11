import { StyledButtonPrimary, StyledButtonSecondary } from "./Button.style";

// Button component, displayed as either primary or secondary depending on which prop is used.
const ActionButton = ({ buttonAction, primary, secondary, children }) => {
  return (
    <>
      {primary && (
        <StyledButtonPrimary onClick={buttonAction}>
          {children}
        </StyledButtonPrimary>
      )}
      {secondary && (
        <StyledButtonSecondary onClick={buttonAction}>
          {children}
        </StyledButtonSecondary>
      )}
    </>
  );
};

export default ActionButton;
