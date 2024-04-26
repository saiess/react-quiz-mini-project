import { ButtonProps } from "../interfaces/buttonProps";

const Button = ({ style, text, onClick, id }: ButtonProps) => {
  return (
    <button
      className={`px-3 py-2 mt-1 mb-1 active:scale-95 ${style}`}
      id={id}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
