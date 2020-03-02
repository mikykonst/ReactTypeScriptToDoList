import React, { FunctionComponent, useContext, useState } from "react";
import { ToDoContext } from "../../state/ToDoReducer";
import { AddToDoItem } from "../../state/Actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLevelDownAlt, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./ToDoInput.scss";

const ToDoInput: FunctionComponent = () => {
    const [inputValue, updateInputValue] = useState("");
    const {dispatch} = useContext(ToDoContext);

    function handleEditInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        updateInputValue(e.target.value);
    }

    function addNewToDoItem() {
        if (inputValue) {
            dispatch(AddToDoItem(inputValue));
            updateInputValue("");
        }
    }

    function handleEnterButton(e: React.KeyboardEvent) {
        if (e.key === "Enter") {
            e.preventDefault();
            addNewToDoItem();
        }
    }

    return (
        <div className="to-do-input">
            <div className="to-do-input-inputs">
                <input
                    className="to-do-input-value"
                    type="text"
                    value={inputValue}
                    onChange={handleEditInputValue}
                    onKeyDown={handleEnterButton}
                />
                <button
                    className="to-do-input-button"
                    onClick={addNewToDoItem}>
                    <FontAwesomeIcon
                        icon={faLevelDownAlt}
                    />
                </button>
            </div>
            <span
                className="to-do-input-warning"
                hidden={inputValue !== ""}>
                <FontAwesomeIcon
                    className="to-do-input-warning-icon"
                    icon={faExclamationCircle}
                />
                You should enter any text to save new item!
            </span>
        </div>
    );
};

export default ToDoInput;
