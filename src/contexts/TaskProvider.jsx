import React, { useState, useContext, createContext } from 'react';
import { v4 } from 'uuid';

const TaskContext = createContext();
export const useTodos = () => useContext(TaskContext);

// eslint-disable-next-line react/prop-types
export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const addTask = (task) => setTasks([...tasks, { id: v4(), value: task, status: "todo" }]);

    const setStatusTask = (id, status) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, status } : task));
    };

    const editTask = (id, value) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, value } : task));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const filterTasks = (query) => {
        setSearchQuery(query); // Update the search query state
    };

    const filteredTasks = tasks.filter(task =>
        task.value.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <TaskContext.Provider value={{ tasks: filteredTasks, addTask, setStatusTask, deleteTask, editTask, filterTasks }}>
            {children}
        </TaskContext.Provider>
    );
}
