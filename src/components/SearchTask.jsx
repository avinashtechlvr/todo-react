import {useState} from "react";
import {useToast} from "../contexts/ToastProvider.jsx";


export function SearchTask({addTask}) {
    const [todo, setTodo] = useState("");
    const {addToast} = useToast();

    function handleInput(e) {
        setTodo(e.target.value);
    }

    const handleSearch = () => {
        if (todo) {
            alert("need to add search code!!!");
        }
    };
    return (<div className="container">
        <input
            className="input-todo"
            value={todo}
            placeholder="Enter todos to search"
            onChange={handleInput}
        />
        <button className="add-button" onClick={handleSearch}>
            Search
        </button>
    </div>);
}