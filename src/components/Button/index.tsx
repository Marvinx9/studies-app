import React from "react";
import style from "./Button.module.scss";

export class Button extends React.Component<{
  type?: "submit" | "reset" | "button" | undefined;
  text: string;
}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.text}
      </button>
    );
  }
}
