import React, { FunctionComponent, useContext } from "react";
import { ToDoItemModel } from "../../models/ToDoItemModel";
import { ToDoContext } from "../../state/ToDoReducer";
import { ToggleToDoItem } from "../../state/Actions";
import "./ToDoItem.scss";

const ToDoItem: FunctionComponent<ToDoItemModel> = (toDoItem: ToDoItemModel) => {
    const {dispatch} = useContext(ToDoContext);

    function DispatchToggleToDoItem() {
        dispatch(ToggleToDoItem(toDoItem.id))
    }

    return (
        <li>
            <div>
                <span
                    className={toDoItem.isDone ? "todo-item-done" : "todo-item-active"}
                    onClick={DispatchToggleToDoItem}
                >
                    {toDoItem.task}
                </span>
            </div>
        </li>
    );
};

export default ToDoItem;
