import React from "react";
import { ToDoContextModel } from "../models/ToDoContextModel";
import { ToDoItemModel } from "../models/ToDoItemModel";
import { ToDoState } from "../models/ToDoState";
import { Action } from "./Action";
import {
    AddToDoItemAction,
    ADD_TO_DO_ITEM,
    ToggleToDoItemAction,
    TOGGLE_TO_DO_ITEM
} from "./Actions";

export const initialState: ToDoState = {
    ToDoItems: []
};

export const ToDoContext: React.Context<ToDoContextModel> = React.createContext({
    state: initialState,
    dispatch: null
});

export const AddToDoItemReducer = (state: ToDoState, action: AddToDoItemAction) => {
    return {
        ...state,
        ToDoItems: [...state.ToDoItems, action.payload.newToDoItem]
    }
};

export const ToggleToDoItemReducer = (state: ToDoState, action: ToggleToDoItemAction) => {
    return {
        ...state,
        ToDoItems: state.ToDoItems.map((toDoItem: ToDoItemModel) =>
            (toDoItem.id === action.payload.removeToDoItem)
                ? {...toDoItem, isDone: !toDoItem.isDone}
                : toDoItem
        )
    }
};

export function ToDoReducer(state: ToDoState, action: Action): ToDoState {
    switch (action.type) {
        case ADD_TO_DO_ITEM:
            return AddToDoItemReducer(state, action);
        case TOGGLE_TO_DO_ITEM:
            return ToggleToDoItemReducer(state, action);
        default:
            return state;
    }
}
