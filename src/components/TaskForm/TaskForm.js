import { Fab, TextField } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { createTaskAction } from "../../redux/actions/actionsCreators";
import { randomColorsMui } from "../../styles/colorsMui";
import { colors } from "../../data/taskListData";

const FormContainer = styled.form`
  display: flex;
  width: 100%;
  margin: auto;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 400px;
  @media (max-width: 480px) {
    width: 100%;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const TaskForm = () => {
  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.taskList);
  const blankFields = {
    taskName: "",
    username: "",
  };
  const [formData, setFormData] = useState(blankFields);
  const isInvalid = formData.name === "" || formData.username === "";

  const changeData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const task = {
      name: formData.taskName,
      isCompleted: false,
      date: new Date().toDateString(),
      username: formData.username,
      color: randomColorsMui(colors),
      id: taskList.length + 1,
    };
    dispatch(createTaskAction(task));
  };

  return (
    <>
      <FormContainer onSubmit={submitForm}>
        <div className="fields-container">
          <TextField
            id="taskName"
            label="Task Name"
            value={formData.taskName}
            onChange={changeData}
            style={{ width: 270 }}
          />
          <TextField
            id="username"
            label="Username"
            value={formData.username}
            onChange={changeData}
          />
        </div>
        <Fab
          color="primary"
          aria-label="add"
          type="submit"
          disabled={isInvalid}
        >
          <AddIcon />
        </Fab>
      </FormContainer>
    </>
  );
};

export default TaskForm;
