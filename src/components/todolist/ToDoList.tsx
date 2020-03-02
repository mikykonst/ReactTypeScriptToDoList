import React, { FunctionComponent, useContext } from "react";
import { ToDoListModel } from "../../models/ToDoListModel";
import { ToDoItemModel } from "../../models/ToDoItemModel";
import ToDoItem from "../todoitem/ToDoItem";
import { ToDoContext } from "../../state/ToDoReducer";
import "./ToDoList.scss";

const ToDoList: FunctionComponent<ToDoListModel> = () => {
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
