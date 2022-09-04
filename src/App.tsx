import { FormEvent, useState } from "react";

import styles from "./App.module.css";
import Header from "./components/Header";

import { PlusCircle, Trash } from "phosphor-react";
import { TodoEmpty } from "./components/TodoEmpty";

interface Todo {
  id: number;
  title: string;
  isComplete?: boolean;
}

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);


  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    let newTodo = {
      id: Math.floor(Math.random() * 100),
      title: todoText,
      isComplete: false,
    };

    setTodos([newTodo, ...todos]);
    setTodoText("");
  }

  function isCompletedTask(id: number) {
    let newTask = todos.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          isComplete: !task.isComplete,
        };
      }
      return task;
    });
    setTodos(newTask);
  }

  function handleDeleteTodo(id: number) {
    let filteredTodos = todos.filter((todo) => todo.id !== id);

    setTodos(filteredTodos);
  }

  return (
    <div>
      <Header />
      <form className={styles.addNewTask} onSubmit={handleSubmit}>
        <input
          maxLength={100}
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
      <div className={styles.tasksContainer}>
        <header>
          <div className={styles.created}>
            <strong>Tarefas criadas</strong>
            <span>{todos.length}</span>
          </div>
          <div className={styles.done}>
            <strong>Concluídas</strong>
            <span>
              <>{todos.filter((task) => task.isComplete).length}</>
              de
              {todos.length}
            </span>
          </div>
        </header>

        <div>
          <ul className={styles.tasksList}>
            {todos.length == 0 ? (
              <TodoEmpty />
            ) : (
              todos.map((todo: Todo) => {
                return (
                  <li key={todo.id} className={styles.task}>
                    <input
                      className={styles.check}
                      type="checkbox"
                      onClick={() => isCompletedTask(todo.id)}
                      checked={todo.isComplete}
                    />
                    <p>{todo.title}</p>
                    <Trash onClick={() => handleDeleteTodo(todo.id)} />
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
