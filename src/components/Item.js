import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Styles} from './style'
const removeTaskAction = (tasks) => {
    return { type: 'REMOVE_TASK', tasks }
}

const Item = (props) =>{
    let tasks = useSelector(state => state.data);
    const dispatch = useDispatch();
    const removeTask = () =>{
        tasks.splice(props.index,1)
        dispatch(removeTaskAction(tasks))
    }
    return(
        <div style={Styles.item}>
            <span style={Styles.itemText}>{props.task}</span>
            <button onClick={removeTask}>remove</button>
        </div>
    )
}

export default Item