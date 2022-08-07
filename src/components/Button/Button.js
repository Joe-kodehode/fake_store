const ActionButton = ({ buy, buttonAction }) => {
  <ActionButton onClick={buttonAction}>{buy ? "Buy" : "Remove"}</ActionButton>;
};

export default ActionButton;
