import { ToDoItemModel } from "../models/ToDoItemModel";
import { Action } from "./Action";

// Constants of action types for easier way of dispatching this actions in the project
export const ADD_TO_DO_ITEM = "ADD_TO_DO_ITEM";
export const TOGGLE_TO_DO_ITEM = "TOGGLE_TO_DO_ITEM";
// Simple iteration counter
let nextToDoId: number = 0;

// "Add action" interface
export interface AddToDoItemAction extends Action {
    payload: {
        newToDoItem: ToDoItemModel
    }
}

// "Toggle action" interface
export interface ToggleToDoItemAction extends Action {
    payload: {
        removeToDoItem: number
    }
}

/*
* AddToDoItem: add action
* newToDoItem: value of new to do task
*/
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

/*
* ToggleToDoItem: toggle active/inactive action
* idToDoItem: id of current item
*/
export const ToggleToDoItem = (idToDoItem: number): ToggleToDoItemAction => (
    {
        type: TOGGLE_TO_DO_ITEM,
        payload: {
            removeToDoItem: idToDoItem
        }
    }
);
