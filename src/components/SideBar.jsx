import React from 'react'
import {Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { count } from '../redux/features/counterSlice'
import { add,update } from '../redux/features/onClickedSlice'

const SideBar = () => {

  const dispatch=useDispatch()

  // Fucntion for handling Add button click
  const handleAdd=()=>{
    dispatch(add())
  }

  // Function for handling update button click
  const handleUpdate=()=>{
    dispatch(update())
  }

  return (
    <div className="side_bar_container">
        <Button className='btn' onClick={handleAdd}> Add</Button>
        <Button className='btn' onClick={handleUpdate}> Update</Button>
    </div>
  )
}

export default SideBar