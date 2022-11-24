import React from 'react'
import { Button } from 'react-bootstrap'
import './task.css'
import {useDispatch} from 'react-redux'
import {deleteTask,doneTask} from '../../JS/Actions/ListTask'
import Edit from '../Edit/Edit'
const Task = ({task}) => {
  const dispatch=useDispatch()
  return (
    <div className='task-container'>
<p className={task.isDone?"done":null}> {task.text}</p>
<Edit task={task}/>
<Button onClick={()=>dispatch(deleteTask(task.id))}>DELETE</Button>
<Button onClick={()=>dispatch(doneTask(task.id))} >{task.isDone?"Done":"unDone"}</Button>
    </div>
  )
}

export default Task