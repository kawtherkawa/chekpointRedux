import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ListTask"



export const addTask = (newtask) => {
    return {
        type: ADD_TASK,
        payload: newtask
    }

}
export const deleteTask=(id)=>{
    return {
        type:DELETE_TASK,
        payload:id
    }
}

export const editTask=(id,newtask)=>{//generalement add-delete
    return{
        type:EDIT_TASK,
        payload:id,newtask
    }
}
export const doneTask=(id)=>{
    return{
        type:DONE_TASK,
        payload:id
    }
}