import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Edit} from "@material-ui/icons";
import {IconButton, TextField} from "@material-ui/core";

type PropsEnableType = {
    value: string
    // setValue:(value:string)=>void
    onChangeValue: (e: string) => void
}
const EnableSpan = (props: PropsEnableType) => {
    const [editTitle, setEditTitle] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        props.onChangeValue(e.target.value)
    }

    const editOff = () => {
        setEditTitle(false)
        props.onChangeValue(value)
    }
    const editOn = () => {
        setEditTitle(true)
        if (props.value) {
            setValue(props.value)
        }
    }
    const onKeyPressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            editOff()
        }
    }
    return (
        editTitle ?
            <TextField
                style={{width: '150px'}}
                value={value}
                onChange={changeTitle}
                onKeyPress={onKeyPressEnter}
                onBlur={editOff} autoFocus={true}
            /> :
             <span>
              {props.value}
                 <IconButton onClick={editOn} size={'small'}>
                    <Edit/>
                </IconButton>
            </span>

    )
};

export default EnableSpan;