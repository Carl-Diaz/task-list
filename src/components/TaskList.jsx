import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <h2>To do Task</h2>
      {tasks.map((task, index) => (
        <Task key={index} name={task.name} completed={task.completed} />
      ))}
    </div>
  );
};

export default TaskList;
