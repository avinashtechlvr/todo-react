import {useState} from "react";


export function AddTask({addTask}) {
    const [todo, setTodo] = useState("");
    function handleInput(e) {
        setTodo(e.target.value);
    }
    const handleAdd = () => {
        if (todo) {
            addTask(todo);
            setTodo("");
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