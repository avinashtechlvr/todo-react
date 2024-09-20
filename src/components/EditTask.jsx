import React,{useState} from "react";


const EditTask = ({todo}) => {
    console.log("Here", todo);
    const todoValue = todo.value || '';
    const [task, setTask] = useState(todoValue);
    const handleInputChange = (e) => {
        setTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Will add save task");

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