import "../styles/App.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useModal } from "../contexts/ModalProvider.jsx";
import TaskForm from "./TaskForm.jsx";
import { useCallback } from "react";

function Todo({ todo = {}, removeTodo = () => {} }) {
    const { showModal } = useModal();

    const handleEdit = useCallback(() => {
        showModal(<TaskForm todo={todo} isEdit={true} />);
    }, [showModal, todo]);


    const handleRemove = useCallback(() => {
        removeTodo(todo.id);
    }, [removeTodo, todo.id]);

    return (
        <div className={`container ${todo.status === "todo" ? "do" : todo.status}`}>
            <h2 className="todo">{todo.value}</h2>
            <button onClick={handleRemove} className="remove-button">
                <FaTrash className="delete-icon" />
            </button>
            <button onClick={handleEdit} className="edit-button">
                <FaEdit className="edit-icon" />
            </button>
        </div>
    );
}

export default Todo;
