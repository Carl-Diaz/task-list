import { useState, useEffect } from "react";

const useTaskManager = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Cargar tareas desde localStorage al iniciar la aplicación
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("Cargando tareas:", savedTasks);
    setTasks(savedTasks);
  }, []); // Solo se ejecutará en el montaje inicial

  useEffect(() => {
    // Guardar tareas en localStorage cada vez que cambien
    console.log("Guardando tareas:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (title, description) => {
    if (title.trim() !== "") {
      const newTask = {
        id: Date.now(),
        name: `${title} - ${description}`,
        completed: false,
      };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId, editedTitle, editedDescription) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, name: `${editedTitle} - ${editedDescription}` }
          : task
      )
    );
  };

  const toggleTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
    toggleTask,
  };
};

export default useTaskManager;
