import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const Task = ({ task, onDelete, onToggleStatus, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEdit(editedTask);
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
          />
          <input
            type="text"
            value={editedTask.description}
            onChange={(e) =>
              setEditedTask({ ...editedTask, description: e.target.value })
            }
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={task.status}
            onChange={onToggleStatus}
          />
          <span style={{ display: "none" }}>
            {task.status ? "Completada" : "Pendiente"}
          </span>
          <span>
            {task.title} - {task.description}
            <button onClick={handleEdit}>
              <MdEdit />
            </button>
            <button onClick={onDelete}>
              <MdDelete />
            </button>
          </span>
        </div>
      )}
    </li>
  );
};

export default Task;
