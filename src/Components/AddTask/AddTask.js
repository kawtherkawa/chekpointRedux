import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {addTask} from '../../JS/Actions/ListTask'
const AddTask = () => {
  const[text,setText]=useState("")
  const dispatch=useDispatch()
  const handleAdd=(e)=>{
e.preventDefault()
if (text){
  dispatch(addTask({id:Math.random(),text,isDone:false}))
} else{
  alert('can not add an empty text')
}
  }
  return (
    <div>
     
        <Form.Control type="text" placeholder="Enter your task"  value={text} onChange={(e)=>setText(e.target.value)}/>
        <Button onClick={handleAdd}> Add Task</Button>
    </div>
  )
}

export default AddTask