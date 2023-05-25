import React from 'react'
import { Link } from 'react-router-dom'
import Alert from './Atert'
const Button = ({children, t}) => {
  return (
    <button className='h-10 w-32 border-2 rounded-3xl border-blue-800 bg-cyan-600'><Link className=' w-full h-full flex items-center justify-center'
    to={`/tarea/${t}`}>
        {children}
    </Link>
    </button>
  )
}
export default Button