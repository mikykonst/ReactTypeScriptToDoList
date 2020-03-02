import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent, useReducer } from "react";
import { initialState, ToDoContext, ToDoReducer } from "../state/ToDoReducer";
import ToDoInput from "./todoinput/ToDoInput";
import ToDoList from "./todolist/ToDoList";
import "./ToDoWizard.scss";

//Create function component with useReducer Hook
const ToDoWizard: FunctionComponent = () => {
  // Create useReducer Hook with our ToDoReducer reducer and initialState
  const [state, dispatch] = useReducer(ToDoReducer, initialState);

  return (
    // Wrap our component with application context for getting access to our global state
    <ToDoContext.Provider value={{state, dispatch}}>
      <div className="container">
        <p className="todo-logo">ToDo list with React hooks<FontAwesomeIcon color="red" icon={faHeart}/></p>
        <ToDoInput/>
        <ToDoList />
      </div>
    </ToDoContext.Provider>
  )
};

export default ToDoWizard;
