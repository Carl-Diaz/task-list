
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  useEffect(() => {
    // Cargar tareas desde localStorage al iniciar la aplicación
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []); // Se ejecuta al montar el componente

  const saveTasksToLocalStorage = (updatedTasks) => {
    // Guardar tareas en localStorage
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      const newTask = {
        id: Date.now(),
        name: `${newTaskTitle} - ${newTaskDescription}`,
        completed: false,
      };
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, newTask];
        saveTasksToLocalStorage(updatedTasks);
        return updatedTasks;
      });
      setNewTaskTitle("");
      setNewTaskDescription("");
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;
    });
  };

  const editTask = (taskId, editedTitle, editedDescription) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, name: `${editedTitle} - ${editedDescription}` }
          : task
      );
      saveTasksToLocalStorage(updatedTasks);
      return updatedTasks;
    });
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
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </div>
  );
};

export default App;
