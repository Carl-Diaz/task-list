import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
const Task = ({ task, onDelete, onToggleStatus, onEdit }) => {
  // Estado para controlar si la tarea está en modo de edición
  const [isEditing, setEditing] = useState(false);
  // Estado para almacenar los cambios en el título y la descripción durante la edición
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
  });

  // Manejar el inicio de la edición
  const handleEdit = () => {
    setEditing(true);
  };

  // Manejar el guardado de los cambios durante la edición
  const handleSave = () => {
    onEdit(editedTask);
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        // Formulario de edición durante la edición
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
          <button onClick={handleSave}>Guardar</button>
        </div>
      ) : (
        // Vista normal de la tarea
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
