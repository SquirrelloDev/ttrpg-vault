interface ButtonProps {
  title: string;
  onClickHandler: () => void;
}
function Button({ title, onClickHandler }: ButtonProps) {
  return (
    <button
      className="text-lime-800 font-kalam text-lg bg-neutral-950 my-2 py-3 px-6 border border-lime-800 rounded-lg hover:text-black hover:bg-lime-800 transition-colors"
      onClick={onClickHandler}

    >
      {title}
    </button>
  );
}
export default Button;
