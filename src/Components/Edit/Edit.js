import React from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../../JS/Actions/ListTask';
const Edit = ({task}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[newTask,setNewTask]=useState(task.text)
  const dispatch=useDispatch()
  const handleEdit=()=>{
    dispatch(editTask(task.id,newTask))
    handleClose()
  }
  return (
    <div>
<Button variant="primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Form.Control type="text" placeholder="Edit your task"  value={newTask} onChange={(e)=>setNewTask(e.target.value)}/>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  )
}

export default Edit
