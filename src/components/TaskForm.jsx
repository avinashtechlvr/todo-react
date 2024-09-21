import React, {useState, useEffect} from "react";
import {useTodos} from "../contexts/TaskProvider.jsx";
import {useToast} from "../contexts/ToastProvider.jsx";
import {useModal} from "../contexts/ModalProvider.jsx";

const TaskForm = ({todo = {}, isEdit = false}) => {
    const {editTask, addTask} = useTodos();
    const {addToast} = useToast();
    const {hideModal} = useModal();

    const [task, setTask] = useState(todo.value || '');

    useEffect(() => {
        if (isEdit && todo?.value) {
            setTask(todo.value);
        }
    }, [isEdit, todo]);

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const isValidTask = () => {
        if (!task.trim()) {
            addToast("Add some value in task!!!", "failure");
            return false;
        }
        if (isEdit && !todo.id) {
            addToast("Invalid task!!!", "failure");
            return false;
        }
        return true;
    };

    const handleSubmit = () => {
        if (!isValidTask()) return;

        if (isEdit) {
            editTask(todo.id, task);
            addToast("Updated Task", "success");
        } else {
            addTask(task);
            addToast("Task Added!", "success");
        }

        hideModal();
    };

    return (
        <div>
            <h2>{isEdit ? "Edit Task" : "Add Task"}</h2>
            <input onChange={handleInputChange} value={task} placeholder="Enter task..." />
            <button onClick={handleSubmit}>Save</button>
        </div>
    );
};

export default TaskForm;
