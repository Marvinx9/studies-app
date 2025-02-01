import { Itarefa } from "../../types/tarefa";
import { Item } from "./Item";
import style from "./List.module.scss";

export function List({ tarefas }: { tarefas: Itarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}
