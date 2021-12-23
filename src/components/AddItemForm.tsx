import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import './AddItem.css'
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type AddItemForm={
    callback:(title:string)=>void
}

const AddItemForm = (props:AddItemForm) => {
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        setError(false)
    }
    const callBack=()=>{
        if (value.trim() !== '') {
            value && props.callback(value)
            setValue('')
            setError(false)
        } else {
            setError(true)
        }
    }
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            callBack()
        }
    }

    return (
        <div>
            <TextField
                error={error}
                helperText={'Field is empty'}
                label={'title'}
                size={"small"}
                variant={'outlined'}
                value={value}
                onChange={changeTitle}
                onKeyPress={onKeyPressAddTask}

            />
            <IconButton  size={'small'} color={'primary'} onClick={()=>callBack()}>
                <AddBox fontSize={"large"}/>
            </IconButton>
            {error && <div className={'error-message'}>
                {error}
            </div>}
        </div>
    );
};

export default AddItemForm;