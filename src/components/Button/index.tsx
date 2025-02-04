import style from "./Button.module.scss";

interface Props {
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  text: string;
}

export function Button({ onClick, type, text }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {text}
    </button>
  );
}
