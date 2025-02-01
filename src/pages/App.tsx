import { useState } from "react";
import { Cronometro } from "../components/Cronometro";
import { Form } from "../components/Form";
import { List } from "../components/List";
import style from "./App.module.scss";
import { Itarefa } from "../types/tarefa";

export function App() {
  const [tarefas, setTarefas] = useState<Itarefa[]>([]);

  return (
    <>
      <div className={style.AppStyle}>
        <Form setTarefas={setTarefas} />
        <Cronometro />
        <List tarefas={tarefas} />
      </div>
    </>
  );
}
