import React from "react";
import style from './Button.module.scss';

export class Button extends React.Component {
  render() {
    return <button className={style.botao}>Button</button>;
  }
}
