import { Avatar, Card, CardHeader, IconButton, Switch } from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import styled from "styled-components";
import Check from "../Check/Check";

const CardContainer = styled.div`
  list-style: none;
  padding: 10px;
`;

const CardHeaderMui = styled(CardHeader)`
  .MuiCardHeader-content {
    & span {
      :first-child {
        text-decoration: ${(props) => props.iscompleted};
      }
    }
  }
`;

const Task = ({ task }) => {
  const firstLetter = task.username[0].toUpperCase();
  const [isCompleted, setIsCompleted] = useState(task.isCompleted);
  const handleChange = () => setIsCompleted(!isCompleted);

  return (
    <CardContainer>
      <Card variant="outlined" sx={{ maxWidth: 400, backgroundColor: "" }}>
        <CardHeaderMui
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {firstLetter}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <Switch
                inputProps={{ "aria-label": "controlled" }}
                onChange={handleChange}
              />
              <Check isCheck={isCompleted} />
            </IconButton>
          }
          align="left"
          title={task.name}
          subheader={task.date}
          iscompleted={isCompleted ? "line-through" : "none"}
        />
      </Card>
    </CardContainer>
  );
};

export default Task;
