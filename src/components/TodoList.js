import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import {Styles} from './style'

const addTaskAction = (title) => {
  return { type: 'ADD_TASK', title }
}
const TodoList = () => {
  const qty = 8;
  const [task,setTask] = useState('')
  const tasks = useSelector(state => state.data.slice(0, qty));
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTaskAction(task))
    setTask('')
  }
  const taskOnChange = e => {
    setTask(e.target.value)
  }
  return (
    <div style={Styles.container}>
      <span style={Styles.header}>To-Do List</span>
      <input type="text" onChange={taskOnChange} value={task} />
      <button type="button" onClick={addTask}>
        Add Task
      </button>
      <div>
        { tasks.map((task,index) => <Item key={index} task={task} index={index} />) }
      </div>
    </div>
  );
}
export default TodoList
