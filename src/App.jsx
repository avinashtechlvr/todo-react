import { useState } from "react";
import Todo from "./components/Todo";
import "./styles/App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleInput(e) {
    setTodo(e.target.value);
  }
  const handleAdd = () => {
    if (todo) {
      let newTodo = {};
      newTodo.id = newTodo.value = todo;
      newTodo.staus = "todo";
      setTodos([...todos, newTodo]);
      setTodo("");
    }
  };
  const handleRemove = (id) => {
    let newTodos = [...todos];
    const index = newTodos.findIndex((ele) => ele.id === id);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <h1 className="header">Todo List</h1>
      <div className="container">
        <input
          className="input-todo"
          value={todo}
          placeholder="Enter todo..."
          onChange={handleInput}
        />
        <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      </div>
      {todos &&
        todos.map((ele) => (
          <Todo key={ele.id} todo={ele} removeTodo={handleRemove} />
        ))}
    </>
  );
}

export default App;
