import {useCallback, useState} from "react";

import {useTodos} from "./contexts/TaskProvider.jsx";
import {useToast} from "./contexts/ToastProvider.jsx";
import {useModal} from "./contexts/ModalProvider.jsx";

import Todo from "./components/Todo";
import TaskForm from "./components/TaskForm.jsx";
import {SearchTask} from "./components/SearchTask.jsx";

import "./styles/App.css";

import {FaPlus} from "react-icons/fa";


function App() {
    const {tasks, deleteTask, filterTasks, filterTasksByStatusAndQuery} = useTodos();
    const {addToast} = useToast();
    const {showModal} = useModal();
    const [currentFilter, setCurrentFilter] = useState('all');

    const handleRemove = useCallback((id) => {
        deleteTask(id);
        addToast("Deleted todo!!!", "failure");
    }, [deleteTask, addToast]);

    const handleAddClick = useCallback(() => {
        showModal(<TaskForm/>);
    }, [showModal]);

    const handleFilterChange = useCallback((filter, value = "") => {
        setCurrentFilter(filter);
        filterTasks(filter, value);
    }, [filterTasksByStatusAndQuery, tasks]);

    return (
        <>
            <h1 className="header">Todo List</h1>
            <SearchTask filterTasks={handleFilterChange} currentFilter={currentFilter}/>

            <div className="status-filters">
                <button
                    className={currentFilter === 'all' ? 'active' : ''}
                    onClick={() => handleFilterChange('all')}
                >
                    All
                </button>
                <button
                    className={currentFilter === 'todo' ? 'active' : ''}
                    onClick={() => handleFilterChange('todo')}
                >
                    Todo
                </button>
                <button
                    className={currentFilter === 'in-progress' ? 'active' : ''}
                    onClick={() => handleFilterChange('in-progress')}
                >
                    In Progress
                </button>
                <button
                    className={currentFilter === 'completed' ? 'active' : ''}
                    onClick={() => handleFilterChange('completed')}
                >
                    Completed
                </button>
            </div>


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
