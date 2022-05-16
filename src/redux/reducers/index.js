import { combineReducers } from "redux";
import taskListDataReducer from "./taskListDataReducer";

const rootReducer = combineReducers({
  taskList: taskListDataReducer,
});

export default rootReducer;
