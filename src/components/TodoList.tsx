import React, {ChangeEvent, useState} from 'react';
import {showType, TaskType} from "../App";
import AddItemForm from "./AddItemForm";
import EnableSpan from "./EnableSpan";
import {ButtonGroup, IconButton} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import {CheckBox, Delete} from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";

type PropTypes = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: string, todoListID: string) => void
    changeFilter: (filter: showType, todoListID: string) => void
    addTask: (text: string, todoListID: string) => void
    setChangeStatus: (id: string, isDone: boolean, todoListID: string) => void
    filter: string
    removeList: (todoListID: string) => void
    id: string
    changeTodoListTitle: (title: string, todoListId: string) => void
    changeTaskTitle: (taskId: string, todoListId: string, title: string) => void
}

const TodoList = (props: PropTypes) => {

    const addTask = (value: string) => {
        value&&props.addTask(value, props.id)
    }
    const setAll = () => {
        props.changeFilter('all', props.id)
    }
    const setActive = () => {
        props.changeFilter('active', props.id)
    }
    const setComplete = () => {
        props.changeFilter('completed', props.id);
    }
    const changeListTitle = (e: string) => {
        props.changeTodoListTitle(e, props.id)
    }
    let tasks =props.tasks&&props.tasks.map((t: TaskType) => {
        let onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
            props.setChangeStatus(t.id, e.currentTarget.checked, props.id)
        }
        let onChangeTaskTitle = (e: string) => {
            props.changeTaskTitle(t.id, e, props.id)
        }

        return (
            <ListItem
                disableGutters
                divider
                className={t.isDone ? 'is-done' : ''} key={t.id}
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0px',
                }}
            >
                <Checkbox
                    color={'primary'}
                    onChange={onChangeStatusHandler}
                    checked={t.isDone}
                />
                <EnableSpan onChangeValue={onChangeTaskTitle} value={t.title}/>
                <IconButton onClick={() => props.removeTask(t.id, props.id)}>
                    <Delete/>
                </IconButton>
            </ListItem>
        )
    })

    return (
        <div className='todolist'>
            <Typography
                        variant={'h6'}
                        align={'center'}
            >
                <EnableSpan value={props.title} onChangeValue={changeListTitle}/>
                <IconButton onClick={() => props.removeList(props.id)}>
                    <Delete/>
                </IconButton>
            </Typography>
            <AddItemForm callback={addTask}/>
            <List>
                {tasks}
            </List>
            <div>
                <ButtonGroup
                    fullWidth
                    variant={'contained'}
                    size={'small'}
                    disableElevation
                >
                    <Button
                        size={'small'}
                        color={props.filter === 'all' ? 'secondary' : 'primary'}
                        onClick={setAll}>All</Button>
                    <Button
                        size={'small'}
                        color={props.filter === 'active' ? 'secondary' : 'primary'}
                        onClick={setActive}>Active</Button>
                    <Button
                        size={'small'}
                        color={props.filter === 'completed' ? 'secondary' : 'primary'}
                        onClick={setComplete}>Completed
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default TodoList;