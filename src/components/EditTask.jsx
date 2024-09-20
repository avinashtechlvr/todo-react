import React, {useContext, useState} from "react";
import {useTodos} from "../contexts/TaskProvider.jsx";
import {useToast} from "../contexts/ToastProvider.jsx";
import {useModal} from "../contexts/ModalProvider.jsx";

const EditTask = ({todo}) => {

    const {editTask} = useTodos();
    const {addToast} = useToast();
    const {hideModal} = useModal();
    const todoValue = todo.value || '';
    const [task, setTask] = useState(todoValue);
    const handleInputChange = (e) => {
        setTask(e.target.value);
    }
    const handleSubmit = () => {
        if(task.trim().length === 0){
            addToast("Add some value in task!!!", "failure");
            return;
        }
        if(!todo.id){
            addToast("Invalid task!!!", "failure");
            return;
        }
        editTask(todo.id, task);
        addToast("Updated Task", "success");
        hideModal();

    }
    return (
        <div>
            <h2>Edit Task</h2>
            <input onChange={handleInputChange}  value={task}/>
            <button onClick={handleSubmit} >Save</button>
        </div>
    );
}
export default EditTask;