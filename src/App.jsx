import { useState } from "react";
import Todo from "./components/Todo";
import "./styles/App.css";
import {useTodos} from "./contexts/TaskProvider.jsx";

function App() {

  const [todo, setTodo] = useState("");
  const { tasks, addTask, deleteTask } = useTodos();
  function handleInput(e) {
    setTodo(e.target.value);
  }
  const handleAdd = () => {
    if (todo) {

      addTask(todo);
      setTodo("");
    }
  };
  const handleRemove = (id) => {
  deleteTask(id);
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
      {tasks &&
        tasks.map((ele) => (
          <Todo key={ele.id} todo={ele} removeTodo={handleRemove} />
        ))}
    </>
  );
}

export default App;
