import React from 'react'
import Button from './Button'

const Cards = ({tarea}) => {
  return (
    <div className="h-64 w-52 bg-slate-200 flex flex-col gap-5 rounded-md items-center border-2 border-blue-400">
        <h1 className='border-b-4 p-2 border-blue-400 w-full'>{tarea.name}</h1>
        <div className='mt-5 space-y-2'>
            {
              tarea.values.length === 0 ?
              <h2>No hay tareas</h2> :
              tarea.values?.map((t)=><Button key={t}  t={t} tarea={tarea}>tarea #{t}</Button>)
            }
        </div>
        
    </div>
  )
}
export default Cards