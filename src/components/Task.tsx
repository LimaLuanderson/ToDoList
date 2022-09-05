import { Trash } from "phosphor-react";
import { Todo } from "../App";
import styles from "../App.module.css";


interface TaskProps {
    todo: Todo;
    onIsCompletedTask: (id: string) => void;
    onDeleteTodo: (id: string) => void;
}


export function Task({todo, onIsCompletedTask, onDeleteTodo}: TaskProps) {
  return (
    <li key={todo.id} className={styles.task}>
      <input
        className={styles.check}
        type="checkbox"
        onClick={() => onIsCompletedTask(todo.id)}
        checked={todo.isComplete}
      />
      <p>{todo.title}</p>
      <Trash onClick={() => onDeleteTodo(todo.id)} />
    </li>
  );
}
