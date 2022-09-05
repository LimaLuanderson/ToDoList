import { TodoEmpty } from "./TodoEmpty";
import { Task } from "./Task";

import styles from "../App.module.css";
import { Todo } from "../App";


interface TasksListProps {
    todos: Todo[];
    onIsCompletedTask: (id: string) => void;
    onDeleteTodo: (id: string) => void;
}

export default function TasksList({todos, onDeleteTodo, onIsCompletedTask}: TasksListProps) {
    return(
        <ul className={styles.tasksList}>
            {todos.length == 0 ? (
              <TodoEmpty />
            ) : (
              todos.map((todo) => {
                return (
                  <Task
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onIsCompletedTask={onIsCompletedTask}
                  />
                );
              })
            )}
          </ul>
    )
}