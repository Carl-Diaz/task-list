import { useState, useEffect } from "react";

const useTasksManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = () => {
    if (newTaskTitle.trim() !== "") {
      const newTask = {
        id: new Date().getTime(),
        title: newTaskTitle,
        description: newTaskDescription,
        status: false,
      };

      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      setNewTaskTitle("");
      setNewTaskDescription("");
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const countCompletedTasks = () => tasks.filter((task) => task.status).length;
  const countIncompleteTasks = () =>
    tasks.filter((task) => !task.status).length;

  const deleteAllTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  return {
    tasks,
    newTaskTitle,
    newTaskDescription,
    setNewTaskTitle,
    setNewTaskDescription,
    addTask,
    deleteTask,
    toggleTaskStatus,
    editTask,
    countCompletedTasks,
    countIncompleteTasks,
    deleteAllTasks,
  };
};

export default useTasksManager;
