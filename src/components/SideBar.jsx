import React from 'react'
import {Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { count } from '../redux/features/counterSlice'

const SideBar = () => {

  const dispatch=useDispatch()

  const handleAdd=()=>{
    dispatch(count())
  }

  return (
    <div className="side_bar_container">
        <Button className='btn' onClick={handleAdd}> Add</Button>
        <Button className='btn'> Update</Button>
    </div>
  )
}

export default SideBar