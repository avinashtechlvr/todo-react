import React, {useState, useContext, createContext} from 'react';
import {v4} from 'uuid';

const TaskContext = createContext();
export const useTodos = () => useContext(TaskContext);

// eslint-disable-next-line react/prop-types
export default function TaskProvider({children}) {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => setTasks([...tasks, {id: v4(), value: task, status: "todo"}]);
    const setStatusTask = (id, status) => setTasks(tasks.map(task => task.id === id ? {
        ...task,
        status: status
    } : task));
    const editTask = (id,value) => setTasks(tasks.map(task => task.id === id ? {...task, value:value} : task));
    const deleteTask = (id) => setTasks(tasks.filter(task => task.id !== id))
    return (
        <TaskContext.Provider value={{tasks, addTask, setStatusTask, deleteTask, editTask}}>{children}</TaskContext.Provider>
    )
}