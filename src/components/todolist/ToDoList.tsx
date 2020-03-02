import React, { FunctionComponent, useContext } from "react";
import { ToDoItemModel } from "../../models/ToDoItemModel";
import { ToDoContext } from "../../state/ToDoReducer";
import ToDoItem from "../todoitem/ToDoItem";
import "./ToDoList.scss";

const ToDoList: FunctionComponent = () => {
    const {state} = useContext(ToDoContext);

    return (
        <div className="todolist-container">
            <ul className="todolist-list">
                {state.ToDoItems.map((toDoItem: ToDoItemModel, index: number) => (
                    <ToDoItem key={index} id={toDoItem.id} task={toDoItem.task} isDone={toDoItem.isDone}/>
                ))}
            </ul>
        </div>
    )
};

export default ToDoList;
