import { useState } from "react";
import { Cronometro } from "../components/Cronometro";
import { Form } from "../components/Form";
import { List } from "../components/List";
import style from "./App.module.scss";
import { ITarefa } from "../types/tarefa";

export function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  return (
    <>
      <div className={style.AppStyle}>
        <Form setTarefas={setTarefas} />
        <Cronometro />
        <List tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
      </div>
    </>
  );
}
