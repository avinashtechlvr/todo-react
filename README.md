# 📋 Todo App

A simple and interactive **Todo App** built with **React** to practice and learn key React concepts such as component state, context, props, and event handling.

---

## 🚀 Features

- **Add Tasks**: Easily add new tasks to your todo list.
- **Edit Tasks**: Modify existing tasks directly from the list.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Dynamic UI Updates**: The UI automatically updates to reflect changes in tasks.
- **Toasts & Popups**: Integrated modals for popups and toast notifications to enhance the user experience.
- **Error Handling**: Displays error messages for invalid inputs while editing tasks.
- **Task Filtering**: Add functionality to filter tasks by status (completed, in-progress, etc.).
---

## 🛠️ Tech Stack

- **React**: Frontend framework
- **React Context API**: For managing global state (Modal, Toast)
- **CSS**: For styling the UI components
- **React Icons**: For using modern icons like edit and delete

---

## 📚 Learning Goals

This project is designed to help you understand and apply the following **React** concepts:

- **State Management**: Using `useState` to manage the state of tasks.
- **Props**: Passing data between parent and child components.
- **Context API**: Centralizing modal and toast management.
- **Component Lifecycle**: Handling events like task editing, deletion, and validation.
- **Modular Components**: Creating reusable components such as Modal, Toast, Todo, and Task forms.
- **Error Handling**: Displaying dynamic error messages when users attempt invalid operations.

---

## 🛠️ Installation and Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/avinashtechlvr/todo-react.git
cd todo-react
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

This will start the app on `localhost:5173`. Open your browser and navigate to `http://localhost:5173`.

---

## 📝 Usage Guide

1. **Add Task**: Type your task into the input field and click "Add Task".
2. **Edit Task**: Click the ✏️ icon to edit the selected task in a modal. Save or cancel changes.
3. **Delete Task**: Click the 🗑️ icon to delete the task.
4. **Error Messages**: If you try to save an invalid task (e.g., an empty task), an error message will display.

---

## 💡 Key Concepts

- **Modals & Toasts**: Implemented a reusable modal and toast notification system using the Context API.
- **Component Reusability**: Components like `Todo`, `AddTask`, and `EditTask` are modular and reusable.
- **State Management**: Centralized state for tasks using the Context API.

---

## 🌱 Future Enhancements


- **Drag and Drop**: Enable users to rearrange tasks by dragging and dropping.
- **Task Deadlines**: Add deadlines and reminders to tasks.

---

## 🙌 Acknowledgements

- [React](https://reactjs.org/) documentation for guidance and best practices.
- [React Icons](https://react-icons.github.io/react-icons/) for providing easy-to-use icons.

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
