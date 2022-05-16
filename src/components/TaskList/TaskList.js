import Task from "../Task/Task";

const TaskList = ({ list }) => {
  return (
    <>
      {list.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
