import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import TaskProvider from "./contexts/TaskProvider.jsx";
import {ToastProvider} from "./contexts/ToastProvider.jsx";
import {ModalProvider} from "./contexts/ModalProvider.jsx";

createRoot(document.getElementById("root")).render(
    <TaskProvider>
        <ToastProvider>
            <ModalProvider>
                <App/>
            </ModalProvider>
        </ToastProvider>
    </TaskProvider>
);
