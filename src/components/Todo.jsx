import "../styles/App.css";
function Todo({ todo }) {
  return (
    <div className="container">
      <h1 className="todo">{todo}</h1>
      <button className="remove-button">Remove</button>
    </div>
  );
}
export default Todo;
