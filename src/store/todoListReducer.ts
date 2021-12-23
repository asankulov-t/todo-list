import {TodoListTypes} from "../App";
import {v1} from "uuid";
import {showType} from "../AppWithReducer";


type RemoveTodoListActionType={
    type:"REMOVE_TODOLIST"
    id:string
}

export type AddTodoList={
    type:"ADD-TODOLIST"
    todolistId:string
    title:string
}
type StatusFilter={
    type:"CHANGE-STATUS"
    todolistId:string
    filter:showType
}
type ChangeTitle={
    type:"CHANGE-NAME-TITLE"
    todolistId:string
    title:string
}
type ActionType=RemoveTodoListActionType | AddTodoList |StatusFilter|ChangeTitle

export const todoListReducer=(state:Array<TodoListTypes>,action:ActionType): Array<TodoListTypes>=>{
    switch (action.type) {
        case "REMOVE_TODOLIST":
            return state.filter(tl => tl.id !== action.id)
        case "ADD-TODOLIST":
            const newTodoList: TodoListTypes = {
                id: action.todolistId,
                title:action.title,
                filter: 'all'
            }
            return [...state, newTodoList]
        case "CHANGE-STATUS":
           return state.map(tl=>tl.id==action.todolistId?{...tl,filter:action.filter}:tl)

        case "CHANGE-NAME-TITLE":
            return state.map(tl=>tl.id==action.todolistId?{...tl, title:action.title}:tl)
        default:
            return state
    }
}

export const RemoveTodoAc=(id:string):RemoveTodoListActionType=>{
    return {
        type:"REMOVE_TODOLIST",
        id
    }
}
export const AddTodoList=(title:string,todolistId:string):AddTodoList=>{
    return {
        type:"ADD-TODOLIST",
        todolistId,
        title
    }
}
export const ChangeStatus=(filter:showType,id:string):StatusFilter=>{
    return {
        type:"CHANGE-STATUS",
        todolistId:id,
        filter,
    }
}
export const ChangeTitle=(id:string,title:string):ChangeTitle=>{
    return {
        type:"CHANGE-NAME-TITLE",
        todolistId:id,
        title,
    }
}