"use client"
import React, { useState } from 'react'

const page = () => {
  const [title , settitle] = useState("")
  const [desc , setdesc] = useState("")
  const [mainTask , stemainTask] = useState([]); // its is used for store task
  const submithandler = (e) =>{
    e.preventDefault()   // used for prevent page relod
   stemainTask([...mainTask , {title , desc}]);  // show main task
    settitle("")
    setdesc("") // for title empty after a submit
    console.log(mainTask)  // show main task
  }
                               //    -----------------------     Delete Handler           ---------------                   //
  const deleteHandler = (i) =>{   
        let copytask = [...mainTask] /// ...spread opreator for refernce array
        copytask.splice(i,1)
        stemainTask(copytask)
  }
                 //     -------------------------       Show data in webpage
  let renderTask = <h2 className='font-bold text-l'>No Task availabel</h2>;    // main task code
  
  if(mainTask.length>0)
  renderTask=mainTask.map((t,i)=>{    // i denote indexs
  return (<li key={i} className='flex  items-center justify-between mb-8'>
      <div className='flex items-center justify-between mb-5 w-2/3'>
      <h5 className='text-3xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-semibold'>{t.desc}</h6>
    </div>
    <button 
    onClick={()=>{
      deleteHandler(i)
    }}
     className='bg-red-600 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>
    );
  })
  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl text-center font-semibold'>My ToDo List</h1>
                                      {/* submithandeler for prevent from rendering webpage */}
      <form onSubmit={submithandler}>  
        <input type="text" 
        className='text-2xl border-red-800 m-5 px-5 py-2'  
        placeholder='Enter Task here' 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}/> 
        <input type="text" 
        className='text-2xl border-blue-800 m-5 px-5 py-2'
        placeholder='Enter Description here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
        
        />

        <button className= ' bg-black text-white rounded px-4 py-2 text-2xl mx-5' >Add Task</button>

      </form>
      <hr/>
      <div className='p-8 bg-slate-200 '>
        <ul>{renderTask}</ul>
      </div>


    </>
  )
}

export default page
