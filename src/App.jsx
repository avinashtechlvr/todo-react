import {useState} from "react";
import Todo from "./components/Todo";
import "./styles/App.css";
import {useTodos} from "./contexts/TaskProvider.jsx";
import {AddTask} from "./components/AddTask.jsx";
import {useToast} from "./contexts/ToastProvider.jsx";

function App() {

    const {tasks, addTask, deleteTask} = useTodos();
    const {addToast} = useToast();
    const handleRemove = (id) => {
        deleteTask(id);
        addToast("Deleted todo!!!", "failure");
    };

    return (
        <>
            <h1 className="header">Todo List</h1>
            <AddTask addTask={addTask}/>
            {tasks &&
                tasks.map((ele) => (
                    <Todo key={ele.id} todo={ele} removeTodo={handleRemove}/>
                ))}
        </>
    );
}

export default App;
