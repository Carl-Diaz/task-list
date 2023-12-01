import React from "react";
import { FaPlus } from "react-icons/fa";
import Task from "./Task";
import Header from "./Header";
import useTasksManager from "../hooks/useTasksManager";

const TaskList = () => {
  const {
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
  } = useTasksManager();

  return (
    <div>
      <Header title="Todo App" />
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={addTask}>
          <FaPlus />
        </button>
      </div>
      {tasks.length > 0 && (
        <div>
          <p>Tareas completadas: {countCompletedTasks()}</p>
          <p>Tareas incompletas: {countIncompleteTasks()}</p>
          <p>Todas las tareas: {tasks.length}</p>
          <button onClick={deleteAllTasks}>Eliminar Todas las Tareas</button>
        </div>
      )}
      <ul style={{ listStyleType: "none" }}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onToggleStatus={() => toggleTaskStatus(task.id)}
            onEdit={(updatedTask) => editTask(task.id, updatedTask)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
