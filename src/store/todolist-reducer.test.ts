import {v1} from "uuid";
import {TodoListTypes} from "../App";
import {AddTodoList, ChangeStatus, ChangeTitle, RemoveTodoAc, todoListReducer} from "./todoListReducer";

let todolistId:string;
let todolistId2:string;
let startState:Array<TodoListTypes>

beforeEach(()=>{
    todolistId=v1();
    todolistId2=v1();
    startState=[
        {id:todolistId,title:'What to learn',filter:'all'},
        {id:todolistId2,title:'What to buy',filter:'all'}
    ]
})

test('correct todolist should be removed',()=>{

    const endState=todoListReducer(startState,RemoveTodoAc(todolistId))
    expect(endState.length).toBe(1);
    expect(endState[0].id).toBe(todolistId2);
})

test('correct todolist should be added',()=>{
    let todolistId=v1();
    let todolistId2=v1();
    let newTodoListTitle='New todolist';
    const startState:Array<TodoListTypes>=[
        {id:todolistId,title:'What to learn',filter:'all'},
        {id:todolistId2,title:'What to buy',filter:'all'},
    ]
    const endStart=todoListReducer(startState,AddTodoList(newTodoListTitle,v1()))
    expect(endStart.length).toBe(3)
    expect(endStart[2].title).toBe(newTodoListTitle)
})
test('correct todolist should be change filter',()=>{
    let todolistId=v1();
    let todolistId2=v1();
    const startState:Array<TodoListTypes>=[
        {id:todolistId,title:'What to learn',filter:'all'},
        {id:todolistId2,title:'What to buy',filter:'all'},
    ]
    const endStart=todoListReducer(startState,ChangeStatus(todolistId2,'active'))
    expect(endStart[0].filter).toBe('all')
    expect(endStart[1].filter).toBe('active')
})
test('correct todolist should be change changeTitlename',()=>{
    let todolistId=v1();
    let todolistId2=v1();
    let newTodoListTitle='Fuck';
    const startState:Array<TodoListTypes>=[
        {id:todolistId,title:'What to learn',filter:'all'},
        {id:todolistId2,title:'What to buy',filter:'all'},
    ]
    const endStart=todoListReducer(startState,ChangeTitle(todolistId2,newTodoListTitle))
    expect(endStart[0].title).toBe('What to learn')
    expect(endStart[1].title).toBe(newTodoListTitle)
})