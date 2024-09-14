import "../styles/App.css";
function Todo({ todo, removeTodo }) {
  return (
    <div className="container">
      <h1 className="todo">{todo}</h1>
      <button onClick={() => removeTodo(todo)} className="remove-button">
        Remove
      </button>
    </div>
  );
}
export default Todo;
