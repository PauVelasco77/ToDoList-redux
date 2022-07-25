import styled from "styled-components";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

function App() {
  return (
    <AppContainer>
      <TaskForm />
      <TaskList />
    </AppContainer>
  );
}

export default App;
