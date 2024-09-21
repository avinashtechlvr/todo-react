import {useEffect, useState} from "react";
import {useTodos} from "../contexts/TaskProvider.jsx";

export function SearchTask({filterTasks = () => {}, currentFilter="all"}) {
    const { searchQuery } = useTodos();
    const [todo, setTodo] = useState("");

    useEffect(() => {
        setTodo(searchQuery);
    }, [searchQuery]);

    function handleInput(e) {
        setTodo(e.target.value);
    }

    const handleSearch = () => {

       filterTasks(currentFilter,todo);
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