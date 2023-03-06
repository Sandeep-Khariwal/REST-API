import React from 'react'
import{MdDelete} from "react-icons/md";

const Items = ({item,user,setUser}) => {


  const deleteHandler = (id) =>{
    const data = user.filter((i)=>i.id !== id)
    setUser(data)
  }

  return (
    <div className=' w-[100%] h-[50%] m-auto' >
    <div className=" w-[100%] h-[50%]  flex flex-row justify-evenly " >
        <div className=" w-[16%] h-[80%] mt-[0.5rem] text-center text-sm  break-words max-sm:text-[0.6rem] max-sm:w-[30% ">{item.firstName}</div>
         <div className="w-[26%] h-[80%] mt-[0.5rem] text-center text-sm  break-words max-sm:text-[0.6rem] max-sm:w-[30%] ">{item.email}</div>
         <div className="w-[15%] h-[80%] mt-[0.5rem] text-center text-sm  break-words max-sm:text-[0.6rem] max-sm:w-[20%] ">{item.phone}</div>
         <div className="w-[10%] h-[80%] mt-[0.5rem] text-center text-sm  break-words max-sm:text-[0.6rem] max-sm:w-[20%] ">{item.age}</div>
         <div className="w-[15%] h-[80%] mt-[0.5rem] text-center text-sm  break-words flex justify-around align-center "> 
         <MdDelete className='font-2xl pointer' onClick={()=>deleteHandler(item.id)}/> </div>
        </div>
        <hr className="m-[0.5rem]"/>
    </div>
  )
}

export default Items
