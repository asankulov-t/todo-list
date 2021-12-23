import {AddTodolistAC, taskReducer} from "./task-reducerr";
import { todoListReducer } from "./todoListReducer";
import {TaskStateType, TodoListTypes} from "../App";
import {v1} from "uuid";

test('ids should be equals', () => {
    const startTasksState: TaskStateType = {};
    const startTodolistsState: Array<TodoListTypes> = [];

    const action = AddTodolistAC("new todolist",v1());

    const endTasksState = taskReducer(startTasksState, action)
    const endTodolistsState = todoListReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.todolistId);
    expect(idFromTodolists).toBe(action.todolistId);
});
