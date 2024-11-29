interface OnClickButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

const OnClickButton = ({
  text,
  onClick,
  disabled = false,
}: OnClickButtonProps) => {
  return (
    <button
      disabled={disabled}
      className="btn btn-primary btn-wide"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default OnClickButton;
