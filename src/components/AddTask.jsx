import {useState} from "react";
import {useToast} from "../contexts/ToastProvider.jsx";


export function AddTask({addTask}) {
    const [todo, setTodo] = useState("");
    const {addToast} = useToast();
    function handleInput(e) {
        setTodo(e.target.value);
    }
    const handleAdd = () => {
        if (todo) {
            addTask(todo);
            setTodo("");
            addToast("Added new Task", "success");
        }
    };
    return (<div className="container">
        <input
            className="input-todo"
            value={todo}
            placeholder="Enter todos..."
            onChange={handleInput}
        />
        <button className="add-button" onClick={handleAdd}>
            Add
        </button>
    </div>);
}