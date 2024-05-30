"use client"
import React, { useState } from 'react'

const page = () => {
 const[title,setTitle] =useState("")
 const[desc,setDesc] =useState("")
 const[tasks,setTasks] =useState([])
 const pauseReload=(e)=>{
  e.preventDefault()
  console.log(title)
  console.log(desc)
  setTasks([...tasks,{title,desc}])
  console.log(tasks)
  setTitle("") 
  setDesc("")
  

 }
 const deleteTask=(i)=>{
  let task=[...tasks]
  task.splice(i,1);
  setTasks(task)
 }
let renderTasks=<h3 className='font-bold'>no tasks available</h3>
if(tasks.length>0)
renderTasks=tasks.map((t,i)=>{  
  return(
    <div className='flex items-center justify-between mb-3 ' > 
    <div className="flex items-center justify-between w-3/5 ">
      <h3>{t.title}</h3>
      <h3>{t.desc}</h3>
    </div>
    <button onClick={()=>{
          deleteTask(i)
        }} className='px-4 py-3 text-white font-bold align-center bg-red-400'>Delete</button>
    </div>
  ) 
})



  return(
  <>
      <h1 className='text-center font-bold text-5xl p-6 bg-black text-white '> CHAMPS TODO LIST </h1>
      <form onSubmit={pauseReload}>
        <input onChange={(content)=>{
          setTitle(content.target.value)
        }} className='  border-4 rounded mx-3 my-3 m border-black px-20 py-3  'value={title} type="text" placeholder="enter your task"></input>
        <input onChange={(content)=>{
          setDesc(content.target.value)
        }} className=' border-4 rounded border-black mx-3 my-3 px-20 py-3' type="text" value={desc} placeholder="enter task description"></input>
        <button  className=' mx-10 border-2 border-black bg-black text-white px-4 py-3 rounded font-bold text-2xl'>add task</button>
      </form>
      <hr/>
      <div  className='p-10 bg-slate-200'> 
        {renderTasks}
          </div>
  </>
  )
}

export default page

