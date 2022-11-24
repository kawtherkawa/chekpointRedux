import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'
const ListTask = () => {
  const list=useSelector(state=>state.listReducer.listTasks)//get list in redux
  const[status,setStatus]=useState("ALL")
  return (
    <div>
    <Button onClick={()=>setStatus("ALL")} >ALL</Button>
    <Button onClick={()=>setStatus("DONE")} >Done</Button>
    <Button onClick={()=>setStatus("UNDONE")} >UnDone</Button>
{status==="DONE"?
list.filter(el=>el.isDone===true)
.map(el=><Task task={el} key={el.id}/>):
status==="UNDONE"?
list.filter(el=>el.isDone===false)
.map(el=><Task task={el} key={el.id}/>) :
list.map(el=><Task task={el} key={el.id}/>)}


    </div>

  )
}

export default ListTask