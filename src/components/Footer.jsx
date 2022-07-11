import React from 'react'
import {useSelector} from 'react-redux'
import { selectCount } from '../redux/features/counterSlice'

const Footer = () => {

  const count=useSelector(selectCount)

  

  return (
    <div className="footer_container">
        Data Added - {count} Times
    </div>
  )
}

export default Footer