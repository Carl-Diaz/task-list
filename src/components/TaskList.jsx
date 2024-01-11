// components/TaskList.jsx
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Task from "./Task";
import Header from "./Header";
import useTasksManager from "../hooks/useTasksManager";
import useTaskForm from "../hooks/useTaskForm";

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

  const { isFormValid, validateForm } = useTaskForm(
    newTaskTitle,
    newTaskDescription
  );

  const [titleErrorVisible, setTitleErrorVisible] = useState(false);

  const handleAddTask = () => {
    if (newTaskTitle.trim() === "") {
      setTitleErrorVisible(true);
    } else {
      setTitleErrorVisible(false);
    }

    if (isFormValid() && newTaskTitle.trim() !== "") {
      addTask();
      setTitleErrorVisible(false);
    } else {
      validateForm();
    }
  };

  return (
    <div>
      <Header title="Todo App" />
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        {titleErrorVisible && <p style={{ color: "red" }}>Title is required</p>}
        <input
          type="text"
          placeholder="Description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        <button onClick={handleAddTask}>
          <FaPlus />
        </button>
      </div>
      {tasks.length > 0 && (
        <div>
          <p>Tasks completed: {countCompletedTasks()}</p>
          <p>Tasks incompleted: {countIncompleteTasks()}</p>
          <p>All tasks: {tasks.length}</p>
          <button onClick={deleteAllTasks}>Delete all tasks</button>
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
