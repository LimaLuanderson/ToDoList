import clipboard from "../assets/clipboard.png";
import styles from "../App.module.css";

export function TodoEmpty() {
  return (
    
      <div className={styles.todoEmpty}>
        <img src={clipboard} alt="" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
  );
}
