import React, { FunctionComponent, useReducer } from "react";
import { initialState, ToDoContext, ToDoReducer } from "../state/ToDoReducer";
import ToDoList from "./todolist/ToDoList";
import ToDoInput from "./todoinput/ToDoInput";

const ToDoWizard: FunctionComponent = () => {
    const [state, dispatch] = useReducer(ToDoReducer, initialState);

    return (
        <ToDoContext.Provider value={{state, dispatch}} >
            <div>
                <ToDoInput />
                <ToDoList ToDoItems={state.ToDoItems}/>
            </div>
        </ToDoContext.Provider>
    )
};

export default ToDoWizard;
