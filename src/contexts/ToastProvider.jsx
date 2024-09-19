import  React, {createContext, useState, useContext, useCallback} from "react";
import {v4} from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/Toast.css";

const ToastContext = createContext();
export const useToast = () => {
    return useContext(ToastContext);
};

export  function ToastProvider({ children }) {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback((message,type = 'success', duration = 3000) => {
        const id = v4();
        setToasts((prevToasts) => [...prevToasts, {id,type, message}]);

        setTimeout(() => {
            removeToast(id);
        }, duration);

    }, []);
    const removeToast = useCallback((id) => {
        setToasts((prevToasts) => prevToasts.filter(toast => toast.id !== id));

    }, []);

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className="toast-container">
                {toasts.map(toast => (
                    <div key={toast.id} className=  {`toast ${toast.type}`}>
                        {toast.message}
                        <button className={`close-button ${toast.type}`}  onClick={() => removeToast(toast.id)}><FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                ))}
            </div>

        </ToastContext.Provider>
    );
}
