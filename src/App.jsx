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
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  return (
    <>
      <h1 className="header">Todo List</h1>
      <div>
        <input
          value={todo}
          placeholder="Enter todo..."
          onChange={handleInput}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      {todos && todos.map((ele) => <Todo key={ele} todo={ele} />)}
    </>
  );
}

export default App;
