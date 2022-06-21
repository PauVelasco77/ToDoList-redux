import { Fab, TextField } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 10px;
  width: 100vw;

  & div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const TaskForm = () => {
  const blankFields = {
    taskName: "",
    username: "",
  };
  const [formData, setFormData] = useState(blankFields);
  const isInvalid = formData.taskName === "" || formData.username === "";

  const changeData = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <FormContainer onSubmit={submitForm}>
        <div>
          <TextField
            id="taskName"
            label="Task Name"
            value={formData.taskName}
            onChange={changeData}
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
