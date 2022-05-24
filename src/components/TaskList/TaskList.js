import Task from "../Task/Task";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTasksAction } from "../../redux/actions/actionsCreators";
import taskListData from "../../data/taskListData";

const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksAction(taskListData));
  }, [dispatch]);
  const taskList = useSelector((state) => state.taskList);

  return (
    <>
      {taskList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default TaskList;
