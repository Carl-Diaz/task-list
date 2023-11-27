const Task = ({ name, completed }) => {
  return (
    <div>
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {name}
      </span>
      <input type="checkbox" checked={completed} readOnly />
    </div>
  );
};

export default Task;
