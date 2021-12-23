import React, {useReducer, useState} from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import {v1} from "uuid";
import AddItemForm from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {AddTodoList, ChangeStatus, ChangeTitle, RemoveTodoAc, todoListReducer} from "./store/todoListReducer";
import {
    AddTaksAc,
    AddTodolistAC,
    ChangeStatusAc,
    ChangeTaskTitleAc,
    RemoveTaskAc,
    taskReducer
} from "./store/task-reducerr";

export type TaskType = {
    title: string,
    isDone: boolean,
    id: string,
}

export type TodoListTypes = {
    id: string
    title: string
    filter: showType
}

export type TaskStateType = {
    [key: string]: Array<TaskType>
}

export type showType = 'all' | 'active' | 'completed'

function AppWithReducer() {
    const todoListID1 = v1();
    const todoListID2 = v1();
    let randomId=v1()
    const [todos, dispatchSetTodos] = useReducer(todoListReducer,[
        {id: todoListID1, title: 'What to learn', filter: 'all'},
        {id: todoListID2, title: 'What will you today', filter: 'all'},
    ])

    const [tasks, dispatchSetTasks] = useReducer(taskReducer,{
        [todoListID1]: [
            {title: 'Array', isDone: true, id: v1()},
            {title: 'gh', isDone: true, id: v1()},
            {title: 'Use Strict', isDone: false, id: v1()}
        ],
        [todoListID2]: [
            {title: 'Array', isDone: true, id: v1()},
            {title: 'Object', isDone: true, id: v1()},
            {title: 'Use Strict', isDone: false, id: v1()}
        ]
    })
    const removeTask = (taskID: string, todoListID: string) => {
        // setTasks({
        //         ...tasks,
        //         [todoListID]: tasks[todoListID].filter(task => task.id !== taskID)
        //     }
        // )
        let action=RemoveTaskAc(taskID,todoListID);
        dispatchSetTasks(action)
    }
    const changeTaskTitle = (taskId: string, title: string, todoListID: string) => {
        // setTasks({
        //     ...tasks, [todoListID]: tasks[todoListID].map(r => r.id === taskId ? {...r, title} : r)
        // })
        dispatchSetTasks(ChangeTaskTitleAc(taskId,title,todoListID))
    }
    const changeTodoListTitle = (title: string, todoListID: string) => {
        // setTodos(todos.map(t => t.id === todoListID ? {...t, title} : t))
        dispatchSetTodos(ChangeTitle(todoListID,title))
    }
    const addTask = (value: string, todoListID: string) => {
        // const newTask: TaskType = {
        //     title: value,
        //     isDone: false,
        //     id: v1()
        // }
        // setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]})
        dispatchSetTasks(AddTaksAc(value,todoListID))
    }
    const setChangeStatus = (id: string, isDone: boolean, todoListID: string) => {
        // setTasks({
        //     ...tasks, [todoListID]: tasks[todoListID]
        //         .map(t => t.id === id ? {...t, isDone: isDone} : t)
        // })
        let action=ChangeStatusAc(id,isDone,todoListID)
        dispatchSetTasks(action)
    }
    const changeFilter = (filter: showType, todoListID: string) => {
        // setTodos(todos.map(tl => tl.id === todoListID ? {...tl, filter} : tl))
        let action=ChangeStatus(filter,todoListID);
        dispatchSetTodos(action)
    }
    const removeList = (todoListID: string) => {
        // setTodos(todos.filter(tl => tl.id !== todoListID))
        let action=RemoveTodoAc(todoListID)
        dispatchSetTodos(action)
        // dispatchSetTasks(action)
    }
    const addTodoList = (title: string) => {
        // const newTodoList: TodoListTypes = {
        //     id: v1(),
        //     title,
        //     filter: 'all'
        // }
        // setTodos([...todos, newTodoList])
        // setTasks({...tasks, [newTodoList.id]: []})

        dispatchSetTodos(AddTodoList(title,randomId))
        dispatchSetTasks(AddTodolistAC(title,randomId))
    }

    const todoListComponent = todos.map(tl => {
        let tasksRender = tasks[tl.id]
        if (tl.filter === 'active') {
            tasksRender = tasks[tl.id].filter((t) => !t.isDone)
        }
        if (tl.filter === 'completed') {
            tasksRender = tasks[tl.id].filter((t) => t.isDone)
        }
        return (
            <Grid item>
                <Paper elevation={8} style={{padding: '15px'}}>
                    <TodoList key={tl.id}
                              id={tl.id}
                              title={tl.title}
                              tasks={tasksRender}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              addTask={addTask}
                              setChangeStatus={setChangeStatus}
                              filter={tl.filter}
                              removeList={removeList}
                              changeTaskTitle={changeTaskTitle}
                              changeTodoListTitle={changeTodoListTitle}
                    />
                </Paper>
            </Grid>

        )
    })
    return (
        <div className="App">

            <AppBar position="sticky">
                <Toolbar style={{justifyContent: "space-between"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        Todolists
                    </Typography>
                    <Button color="inherit" variant={"outlined"}>Login</Button>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Grid container style={{padding: "29px 0px"}}>
                    <AddItemForm callback={addTodoList}/>
                </Grid>
                <Grid container spacing={4}>
                    {todoListComponent}
                </Grid>
            </Container>

        </div>
    );
}

export default AppWithReducer;
