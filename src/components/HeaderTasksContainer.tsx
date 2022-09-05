import { Todo } from "../App";
import styles from "../App.module.css";



interface HeaderTasksContainerProps {
    todos: Todo[];
}

export default function HeaderTasksContainer({todos}: HeaderTasksContainerProps) {
  let numberOfTodos = todos.length;
  let numberOfCompletedTodos = todos.filter((task) => task.isComplete).length;

    return(
        <header>
          <div className={styles.created}>
            <strong>Tarefas criadas</strong>
            <span>{numberOfTodos}</span>
          </div>
          <div className={styles.done}>
            <strong>Concluídas</strong>
            <span>
              {numberOfCompletedTodos + ' de ' + numberOfTodos}
            </span>
          </div>
        </header>
    );
}