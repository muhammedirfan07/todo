import React, { useEffect, useState } from 'react'
import './App.css'
import TodoContainer from './Components/TodoContainer'
import TodoAdd from './Components/TodoAdd'

function App() {
  const [todoInput,SetTodoInput]=useState("")

   const [count,setCount]=useState(1)
   const [todos,setTodos]=useState([])

  //  useEffect(()=>{
  //   console.log("todos :",todos);
  //  },[todos])
 
  const randonBgColor=()=>{
    const colors = [ '#f94144',
      '#f3722c', 
      '#f8961e', 
      '#f9c74f', 
      '#90be6d', 
      '#43aa8b',
      '#577590', 
      '#277da1', 
      '#9b5de5', 
      '#e056fd'];
    return colors[Math.floor(Math.random() * colors.length)];
  
  }
  
  const todoHandel=()=>{
      if(todoInput.trim()===""){
        alert("Please enter a todo")
        return
      }
      const newTodo={
        id:count,
        title:todoInput,
        color:randonBgColor()
      }
      console.log(`${count} todoInput :${todoInput}`);
      setTodos([...todos,newTodo])
      setCount(count+1)
      SetTodoInput("")
      console.log("newTodo :", newTodo);
  }

 

  return (
    <>
      <div style={{ minHeight: '100vh' }} className=' container p-3  '>
        <TodoAdd todoInput={todoInput} SetTodoInput={SetTodoInput} todoHandel={todoHandel} />
        <TodoContainer setTodos={setTodos} todos={todos} />
      </div>
    </>
  )
}

export default App
