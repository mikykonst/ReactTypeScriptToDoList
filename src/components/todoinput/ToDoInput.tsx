import React, { FunctionComponent, useContext, useState } from "react";
import { ToDoContext } from "../../state/ToDoReducer";
import { AddToDoItem } from "../../state/Actions";

const ToDoInput: FunctionComponent = () => {
    const [inputValue, updateInputValue] = useState("");
    const {dispatch} = useContext(ToDoContext);

    function handleEditInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        updateInputValue(e.target.value);
    }

    function addNewToDoItem() {
        dispatch(AddToDoItem(inputValue));
    }

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleEditInputValue}
            />
            <button onClick={addNewToDoItem}>+</button>
        </div>
    );
};

export default ToDoInput;
