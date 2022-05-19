import { Avatar, Card, CardHeader, IconButton, Switch } from "@mui/material";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  deleteTaskAction,
  isCompletedAction,
} from "../../redux/actions/actionsCreators";
import Check from "../Check/Check";
import Trash from "../Trash/Trash";

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
  const dispatch = useDispatch();

  const handleChange = (task) => {
    dispatch(isCompletedAction(task));
  };

  const handleDelete = (task) => {
    dispatch(deleteTaskAction(task));
  };

  return (
    <CardContainer>
      <Card variant="outlined" sx={{ maxWidth: 400, backgroundColor: "" }}>
        <CardHeaderMui
          avatar={
            <Avatar
              style={{
                backgroundColor: task.color,
              }}
              aria-label="recipe"
            >
              {firstLetter}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <Trash actionOnClick={() => handleDelete(task)} />
              <Switch
                inputProps={{ "aria-label": "controlled" }}
                onChange={() => handleChange(task)}
              />
              <Check isCheck={task.isCompleted} />
            </IconButton>
          }
          align="left"
          title={task.name}
          subheader={task.date}
          iscompleted={task.isCompleted ? "line-through" : "none"}
        />
      </Card>
    </CardContainer>
  );
};

export default Task;
