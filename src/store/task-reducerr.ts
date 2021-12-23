import {TaskStateType, TaskType, TodoListTypes} from "../App";
import {v1} from "uuid";
import {AddTodoList} from "./todoListReducer";


type RemoveTaskActionType={
    type:"REMOVE_TASK"
    id:string,
    todoListId:string
}

type AddTaks={
    type:"ADD-TASK"
    title:string
    todolistId:string
}
type StatusFilter={
    type:"CHANGE-STATUS"
    id:string
    isDone:boolean
    todolistId:string
}
type ChangeTitle={
    type:"CHANGE-NAME-TITLE"
    id:string
    title:string,
    todolistId:string
}
type RemoveTodolistType={
    type:'REMOVE_TODOLIST',
    todolistId:string
}
type ActionType=RemoveTaskActionType | AddTaks |StatusFilter|ChangeTitle|AddTodoList|RemoveTodolistType

export const taskReducer=(state:TaskStateType,action:ActionType):TaskStateType=>{
    switch (action.type) {
        case "REMOVE_TASK":
            return {...state, [action.todoListId]:state[action.todoListId].filter(task=>task.id!==action.id)}
        case "ADD-TASK":
            const newTodoList: TaskType = {
                id: v1(),
                title:action.title,
                isDone: false
            }
            return {...state,[action.todolistId]:[newTodoList, ...state[action.todolistId]]}
        case "CHANGE-STATUS":
            return {...state,[action.todolistId]:state[action.todolistId]
                    .map(tl=>tl.id==action.id?{...tl,isDone:action.isDone}:tl)}
            // return state.map(tl=>tl.id==action.id?{...tl,filter:action.filter}:tl)
        case "CHANGE-NAME-TITLE":
            return {...state,[action.todolistId]:state[action.todolistId]
                    .map(t=>t.id==action.id?{...t,title:action.title}:t)}
        case "ADD-TODOLIST":
            return {...state,[action.todolistId]:[]}
        case "REMOVE_TODOLIST":
            let{[action.todolistId]:[],...newState}={...state}
            // let newState={...state}
            // delete newState[action.todolistId]
            return newState
        default:
            return state
    }
}

export const RemoveTaskAc=(taskId:string, todolistId:string):RemoveTaskActionType=>{
    return {
        type:"REMOVE_TASK",
        id:taskId,
        todoListId:todolistId,
    }
}
export const AddTaksAc=(title:string,todolistId:string):AddTaks=>{
    return {
        type:"ADD-TASK",
        title,
        todolistId:todolistId
    }
}
export const ChangeStatusAc=(id:string,isDone:boolean, todolistId:string):StatusFilter=>{
    return {
        type:"CHANGE-STATUS",
        id,
        isDone,
        todolistId,
    }
}
export const ChangeTaskTitleAc=(id:string,todolistId:string,title:string):ChangeTitle=>{
    return {
        type:"CHANGE-NAME-TITLE",
        id,
        title,
        todolistId
    }
}
export const AddTodolistAC=(title:string,todolistId:string):AddTodoList=>{
    return{
        type:'ADD-TODOLIST',
        todolistId,
        title
    }
}
export const RemoveTodolistAC=(id:string):RemoveTodolistType=>{
    return{
        type:'REMOVE_TODOLIST',
        todolistId:id
    }
}