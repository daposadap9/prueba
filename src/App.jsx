import './App.css'
import { Route, Routes, useNavigate} from "react-router-dom";
import Home from './pages/Home';
import Tareas from './pages/Tareas';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      name: 'Tarea #1',
      values: ["1"],
    },
    { 
      name: 'Tarea #2',
      values: ["2"] },
    { name: 'Tarea#3',
      values: ["3.1", "3.2"] 
    },
    { 
      name: 'Tarea #4',
      values: ["4.1", "4.2", "4.3"] },
    { 
      name: 'Tarea #5',
      values: ["5.1", "5.2"] },
    { 
      name: 'Tarea #6',
      values: ["6"] },
  ]);
const navigate = useNavigate()


const deleteTodo = (element) => {
  const nuevasTareas = [...todos]
  const indiceTarea = nuevasTareas.findIndex(tarea => tarea.values.includes(element));
  const indiceValue = nuevasTareas[indiceTarea]?.values.indexOf(element)
  nuevasTareas[indiceTarea]?.values.splice(indiceValue,1)
  setTodos(nuevasTareas)
  navigate('/')
}

const blockTodos = (param) => {
  const nuevasTareas = [...todos]

  const allValues = nuevasTareas.flatMap(tarea => tarea.values);

  if (param != allValues[0] & allValues.includes('1')) {
    alert('finalizar la tarea #1 primero')
    navigate('/')
  }
  else if (param === '3.2' & allValues.includes('3.1')) {
    alert(' debo finalizar la tarea #3.1 ')
    navigate('/')
  }
  else if (param === '4.1' & allValues.includes('3.2')) {
    alert('debo finalizar la tarea #3.2 primero')
    navigate('/')
  }
  else if (param === '5.2' & allValues.includes('5.1')) {
    alert('debo finalizar la tarea #5.1 primero')
    navigate('/')
  }
  console.log(allValues[0]);
}

// useEffect(()=> {
//   blockTodos()
// }, [])

  return (
    <>
    <Routes>
        <Route path="/" element={<Home todos={todos}  />}/>
        <Route path='/tarea/:id' element={<Tareas deleteTodo={deleteTodo} blockTodos={blockTodos} />}/>
    </Routes>  
    </>
  )
}

export default App
