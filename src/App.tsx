import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import Button from "./components/Button";
import Header from "./components/Header";
import HeaderTasksContainer from "./components/HeaderTasksContainer";
import TasksList from "./components/TasksList";

import styles from "./App.module.css";

export interface Todo {
  id: string;
  title: string;
  isComplete?: boolean;
}

function App() {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (todoText.trim() !== "") {
      let newTodo = {
        id: uuidv4(),
        title: todoText,
        isComplete: false,
      };
  
      setTodos([newTodo, ...todos]);
      setTodoText("");
    }
    return;
  }

  function isCompletedTask(id: string) {
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

  function handleDeleteTodo(id: string) {
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
        <Button />
      </form>
      
      <div className={styles.tasksContainer}>
        <HeaderTasksContainer todos={todos}/>
        <div>
          <TasksList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onIsCompletedTask={isCompletedTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;