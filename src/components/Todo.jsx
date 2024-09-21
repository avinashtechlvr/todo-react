import "../styles/App.css";
import { FaEdit, FaTrash, FaCheckCircle, FaClock } from "react-icons/fa";
import { useModal } from "../contexts/ModalProvider.jsx";
import TaskForm from "./TaskForm.jsx";
import { useCallback } from "react";
import { useTodos } from "../contexts/TaskProvider.jsx";
import {useToast} from "../contexts/ToastProvider.jsx"; // Import your context

function Todo({ todo = {}, removeTodo = () => {} }) {
    const { showModal } = useModal();
    const { addToast } = useToast();
    const { setStatusTask } = useTodos(); // Get the setStatusTask function

    const handleEdit = useCallback(() => {
        showModal(<TaskForm todo={todo} isEdit={true} />);
    }, [showModal, todo]);

    const handleRemove = useCallback(() => {
        removeTodo(todo.id);
    }, [removeTodo, todo.id]);

    const handleSetInProgress = () => {
        if(todo.status === "in-progress"){
            addToast("already task in progress", "warning");
            return;
        }
        setStatusTask(todo.id, "in-progress");
        addToast("task progress updated to In Progress","success");
    };

    const handleSetCompleted = () => {
        if(todo.status === "completed"){
            addToast("already task is completed", "warning");
            return;
        }
        setStatusTask(todo.id, "completed");
        addToast("task completed!", "success");
    };

    return (
        <div className={`container ${todo.status === "todo" ? "do" : todo.status}`}>
            <h2 className={`todo ${todo.status === "todo" ? "do-status" : todo.status+"-status"}`}>{todo.value}</h2>

            <button className="status-button clock-button" onClick={handleSetInProgress}>
                <FaClock className="status-icon clock-icon"/>
            </button>
            <button className="status-button check-button" onClick={handleSetCompleted}>
                <FaCheckCircle className="status-icon check-icon"/>
            </button>
            <button onClick={handleEdit} className="edit-button">
                <FaEdit className="edit-icon"/>
            </button>
            <button onClick={handleRemove} className="remove-button">
                <FaTrash className="delete-icon"/>
            </button>

        </div>
    );
}

export default Todo;
