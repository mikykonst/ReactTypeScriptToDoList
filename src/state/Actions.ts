import { Action } from "./Action";
import { ToDoItemModel } from "../models/ToDoItemModel";

export const ADD_TO_DO_ITEM = "ADD_TO_DO_ITEM";
export const TOGGLE_TO_DO_ITEM = "TOGGLE_TO_DO_ITEM";
let nextToDoId: number = 0;

export interface AddToDoItemAction extends Action {
    payload: {
        newToDoItem: ToDoItemModel
    }
}

export interface ToggleToDoItemAction extends Action {
    payload: {
        removeToDoItem: number
    }
}

export const AddToDoItem = (newToDoItem: string): AddToDoItemAction => (
    {
        type: ADD_TO_DO_ITEM,
        payload: {
            newToDoItem: {
                id: nextToDoId++,
                task: newToDoItem,
                isDone: false
            }
        }
    }
);

export const ToggleToDoItem = (idToDoItem: number): ToggleToDoItemAction => (
    {
        type: TOGGLE_TO_DO_ITEM,
        payload: {
            removeToDoItem: idToDoItem
        }
    }
);
