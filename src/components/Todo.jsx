import "../styles/App.css";
import {FaEdit, FaTrash} from "react-icons/fa";
import {useModal} from "../contexts/ModalProvider.jsx";
import EditTask from "./EditTask.jsx";

function Todo({todo, removeTodo}) {
    const {showModal} = useModal();
    const handleEdit = () => {
        showModal(<EditTask todo={todo} />);
    }
    return (<div className={`container ${todo.status == "todo" ? "do" : todo.status}`}>
        <h1 className="todo">{todo.value}</h1>
        <button onClick={() => removeTodo(todo.id)} className="remove-button">
            <FaTrash className="delete-icon"/>
        </button>
        <button
            onClick={handleEdit}
            className="edit-button"
        >
            <FaEdit className="edit-icon"/>
        </button>
    </div>);
}

export default Todo;
