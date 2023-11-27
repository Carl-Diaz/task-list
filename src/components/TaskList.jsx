// src/components/TaskList.js
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onToggle, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
