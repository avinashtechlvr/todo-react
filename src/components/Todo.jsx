import "../styles/App.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function Todo({ todo, removeTodo }) {
  return (
    <div className="container">
      <h1 className="todo">{todo.value}</h1>
      <button onClick={() => removeTodo(todo.id)} className="remove-button">
        <FaTrash className="delete-icon" />
      </button>
      <button
        onClick={() => {
          alert("yet to code!!!");
        }}
        className="edit-button"
      >
        <FaEdit className="edit-icon" />
      </button>
    </div>
  );
}
export default Todo;
