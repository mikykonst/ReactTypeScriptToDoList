import React, { FunctionComponent, useContext, useState } from "react";
import { ToDoContext } from "../../state/ToDoReducer";
import { AddToDoItem } from "../../state/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt } from "@fortawesome/free-solid-svg-icons";
import "./ToDoInput.scss";

const ToDoInput: FunctionComponent = () => {
    const [inputValue, updateInputValue] = useState("");
    const {dispatch} = useContext(ToDoContext);

    function handleEditInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        updateInputValue(e.target.value);
    }

    function addNewToDoItem() {
        dispatch(AddToDoItem(inputValue));
        updateInputValue("");
    }

    function handleEnterButton(e: React.KeyboardEvent) {
        debugger;
        if(e.key === "Enter") {
            e.preventDefault();
            addNewToDoItem();
        }
    }

    return (
        <div className="to-do-input">
            <input
                className="to-do-input-value"
                type="text"
                value={inputValue}
                onChange={handleEditInputValue}
                onKeyDown={handleEnterButton}
            />
            <button className="to-do-input-button" onClick={addNewToDoItem}><FontAwesomeIcon icon={faLevelDownAlt} /></button>
        </div>
    );
};

export default ToDoInput;
