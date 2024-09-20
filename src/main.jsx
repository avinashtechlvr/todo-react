import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import TaskProvider from "./contexts/TaskProvider.jsx";
import {ToastProvider} from "./contexts/ToastProvider.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TaskProvider>
            <ToastProvider>
                <App/>
            </ToastProvider>
        </TaskProvider>
    </StrictMode>
);
