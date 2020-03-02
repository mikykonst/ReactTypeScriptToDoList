import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FunctionComponent, useReducer } from "react";
import { initialState, ToDoContext, ToDoReducer } from "../state/ToDoReducer";
import ToDoInput from "./todoinput/ToDoInput";
import ToDoList from "./todolist/ToDoList";
import "./ToDoWizard.scss";

const ToDoWizard: FunctionComponent = () => {
    const [state, dispatch] = useReducer(ToDoReducer, initialState);

    return (
        <ToDoContext.Provider value={{state, dispatch}} >
            <div className="container">
                <p className="todo-logo">ToDo list with React hooks<FontAwesomeIcon color="red" icon={faHeart}/></p>
                <ToDoInput />
                <ToDoList ToDoItems={state.ToDoItems}/>
            </div>
        </ToDoContext.Provider>
    )
};

export default ToDoWizard;
