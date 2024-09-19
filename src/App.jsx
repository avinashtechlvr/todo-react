import { useState } from "react";
import Todo from "./components/Todo";
import "./styles/App.css";
import {useTodos} from "./contexts/TaskProvider.jsx";
import {AddTask} from "./components/AddTask.jsx";

function App() {

  const { tasks, addTask, deleteTask } = useTodos();

  const handleRemove = (id) => {
  deleteTask(id);
  };

  return (
    <>
      <h1 className="header">Todo List</h1>
      <AddTask addTask={addTask} />
      {tasks &&
        tasks.map((ele) => (
          <Todo key={ele.id} todo={ele} removeTodo={handleRemove} />
        ))}
    </>
  );
}

export default App;
