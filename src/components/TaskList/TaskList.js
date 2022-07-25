import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  loadTasksAction,
  reorderTasksAction,
} from "../../redux/actions/actionsCreators";
import taskListData from "../../data/taskListData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Listul = styled.ul`
  height: 100%;
  width: 100%;
  padding: 0;
`;

const TaskList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasksAction(taskListData));
  }, [dispatch]);
  const taskList = useSelector((state) => state.taskList);

  return (
    <>
      <DragDropContext
        onDragEnd={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          ) {
            return;
          }

          dispatch(
            reorderTasksAction(result.source.index, result.destination.index)
          );
        }}
      >
        <Droppable droppableId="tasks">
          {(droppableProvided) => (
            <Listul
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              {taskList.map((task, index) => (
                <Draggable key={task.id} draggableId={task.name} index={index}>
                  {(draggableProvided) => (
                    <Task task={task} draggableProvided={draggableProvided} />
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
