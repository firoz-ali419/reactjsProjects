import { useEffect, useState } from 'react'
import { todoProvider } from './context'


function App() {
  const [todos,setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prevTodo)=>[{id:Date.now(),...todo},...prevTodo])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prevTodo)=>prevTodo.map((prev)=>prev.id===id?todo:prev))
  }

  const deleteTodo=(id)=>{
    setTodos((prevTodo)=>prevTodo.filter((prev)=>prev.id!==id))
  }
  const toggleComplete=(id)=>{
    setTodos((prevTodo)=>prevTodo.map((prev)=>prev.id===id?[{...prev,complete:!prev.complete}]:prev))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0)
      setTodos(todos)
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <todoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
     <h1>Hello World!!</h1>
    </todoProvider>
  )
}

export default App
