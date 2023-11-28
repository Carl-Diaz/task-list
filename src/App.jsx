import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useTaskManager from "./hooks/useTaskManager";

const App = () => {
  const { tasks, createTask, deleteTask, updateTask, toggleTask } =
    useTaskManager();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  const addTask = () => {
    createTask(newTaskTitle, newTaskDescription);
    setNewTaskTitle("");
    setNewTaskDescription("");
  };

  return (
    <div>
      <Header />
      <div>
        {/* Agregar una interfaz para agregar nuevas tareas */}
        <input
          type="text"
          placeholder="New task title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New task description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <TaskList
        tasks={tasks}
        onToggle={toggleTask} // Asegúrate de pasar la función correcta aquí
        onDelete={deleteTask}
        onEdit={updateTask}
      />
    </div>
  );
};

export default App;
