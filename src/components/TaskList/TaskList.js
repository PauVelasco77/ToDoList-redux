import Task from "../Task/Task";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadTasksAction } from "../../redux/actions/actionsCreators";
import taskListData from "../../data/taskListData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Listul = styled.ul`
  height: 100%;
  width: 100%;
  background-color: yellow;
`;

const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTasksAction(taskListData));
  }, [dispatch]);
  const taskList = useSelector((state) => state.taskList);

  return (
    <>
      <DragDropContext onDragEnd={(result) => console.log(result)}>
        <Droppable droppableId="tasks">
          {(droppableProvided) => (
            <Listul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              {taskList.map((task, index) => (
                <Draggable key={task.id} draggableId={task.name} index={index}>
                  {(draggableProvided) => (
                    <li
                      // task={task}
                      {...draggableProvided.draggableProps}
                      ref={droppableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                    >
                      {task.name}
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </Listul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default TaskList;
