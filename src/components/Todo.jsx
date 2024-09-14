import "../styles/App.css";
import { FaTrash } from "react-icons/fa";

function Todo({ todo, removeTodo }) {
  return (
    <div className="container">
      <h1 className="todo">{todo}</h1>
      <button onClick={() => removeTodo(todo)} className="remove-button">
        <FaTrash className="delete-icon" />
      </button>
    </div>
  );
}
export default Todo;
