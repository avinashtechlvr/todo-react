import { useCallback } from "react";

import { useTodos } from "./contexts/TaskProvider.jsx";
import { SearchTask } from "./components/SearchTask.jsx";
import { useToast } from "./contexts/ToastProvider.jsx";

import Todo from "./components/Todo";
import "./styles/App.css";

import { FaPlus } from "react-icons/fa";
import {useModal} from "./contexts/ModalProvider.jsx";
import TaskForm from "./components/TaskForm.jsx";

function App() {
    const { tasks, addTask, deleteTask, filterTasks } = useTodos();
    const { addToast } = useToast();
    const {showModal} = useModal();

    const handleRemove = useCallback((id) => {
        deleteTask(id);
        addToast("Deleted todo!!!", "failure");
    }, [deleteTask, addToast]);

    const handleAddClick = useCallback(() =>{
        showModal(<TaskForm />);
    },[showModal]);

    const handleSearchChange = useCallback((value) => {
        filterTasks(value);
    }, [filterTasks]);


    return (
        <>
            <h1 className="header">Todo List</h1>
            <SearchTask filterTasks={handleSearchChange}/>
            {tasks && tasks.map((ele) => (
                <Todo key={ele.id} todo={ele} removeTodo={handleRemove}/>
            ))}
            <button className="fab" onClick={handleAddClick}>
                <FaPlus className="fab-icon"/>
            </button>
        </>
    );
}

export default App;
