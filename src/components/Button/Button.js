import { StyledButtonPrimary } from "./Button.style";
import { StyledButtonSecondary } from "./Button.style";

const ActionButton = ({ buy, buttonAction, primary, secondary, children }) => {
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
