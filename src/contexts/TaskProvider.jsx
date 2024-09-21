import React, { useState, useContext, createContext } from 'react';
import { v4 } from 'uuid';

const TaskContext = createContext();
export const useTodos = () => useContext(TaskContext);

// eslint-disable-next-line react/prop-types
export default function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentStatus, setCurrentStatus] = useState("all");

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

    const filterTasks = (statusFilter, query) => {
        setSearchQuery(query);
        setCurrentStatus(statusFilter);
    };

    const filterTasksByStatusAndQuery = tasks.filter(task => {
            const matchesStatus = currentStatus === 'all' || task.status === currentStatus;
            const matchesQuery = task.value.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesStatus && matchesQuery;
        });
    return (
        <TaskContext.Provider value={{ tasks: filterTasksByStatusAndQuery, addTask, setStatusTask, deleteTask, editTask, filterTasks, filterTasksByStatusAndQuery, searchQuery }}>
            {children}
        </TaskContext.Provider>
    );
}
