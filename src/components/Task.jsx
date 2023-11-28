import React, { useState } from "react";

const Task = ({ id, name, completed, onToggle, onDelete, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    const [editedTitle, editedDescription] = editedName.split(" - ");
    onEdit(id, editedTitle, editedDescription);
    setEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <span style={{ textDecoration: completed ? "line-through" : "none" }}>
            {name}
          </span>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => onToggle(id)}
          />

          <button onClick={handleEditClick}>Editar</button>
          <button onClick={() => onDelete(id)}>Eliminar</button>
        </div>
      )}
    </div>
  );
};

export default Task;
