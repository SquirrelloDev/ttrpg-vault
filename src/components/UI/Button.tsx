import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClickHandler: () => void;
}
function Button({ children, onClickHandler, ...props }: ButtonProps) {
  return (
    <button
      className="text-lime-800 font-kalam text-lg bg-neutral-950 my-2 py-3 px-6 border border-lime-800 rounded-lg hover:text-black hover:bg-lime-800 transition-colors"
      onClick={onClickHandler}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
