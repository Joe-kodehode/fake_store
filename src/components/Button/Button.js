import StyledButton from "./Button.style";

const ActionButton = ({ buy, buttonAction }) => {
  return (
    <StyledButton onClick={buttonAction}>{buy ? "Buy" : "Remove"}</StyledButton>
  );
};

export default ActionButton;
