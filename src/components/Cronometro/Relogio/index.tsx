import style from "./Relogio.module.scss";

interface Props {
  tempo: number | undefined;
}

export function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  const [minuto_dezena, minuto_unidade] = String(minutos).padStart(2, "0");
  const [segundo_dezena, segundo_unidade] = String(segundos).padStart(2, "0");
  return (
    <>
      <span className={style.relogioNumero}>{minuto_dezena}</span>
      <span className={style.relogioNumero}>{minuto_unidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundo_dezena}</span>
      <span className={style.relogioNumero}>{segundo_unidade}</span>
    </>
  );
}
