import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Tareas = ({deleteTodo, blockTodos }) => {

    const navigate = useNavigate()

    const { id } = useParams();


    useEffect(()=>{
      blockTodos(id)
    },[])
    


  return (
  <button onClick={()=>deleteTodo(id) } className='h-10 w-36 border-2 rounded-3xl border-blue-800 bg-cyan-600'>Finalizar tarea #{id}</button>
  )
}

export default Tareas