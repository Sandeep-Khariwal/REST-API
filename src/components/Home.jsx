import React, {useEffect, useState } from "react";
import Item from "./Items";
import { useNavigate } from "react-router-dom";

const Home = ({user,setUser}) => {

    const [search , setSearch] = useState("")
    const [newUser , setNewUSer] = useState([])
    var [prev , setPrev] = useState(0)
    var [next , setNext] = useState(5)

    const navigate = useNavigate();

    useEffect(()=>{
      const res = user.slice(prev,next)
      setNewUSer(res)
      //eslint-disable-next-line
    },[user])

    const Previous = () =>{
       if(prev>0){
        setPrev(prev-=5)
        setNext(next-=5)
        const res = user.slice(prev,next)
        setNewUSer(res)
       }
       else{
        alert("No Previous Page")
       }
    }

    const Next = () =>{
      if(next<30){
        setPrev(prev+=5)
        setNext(next+=5)
        const res = user.slice(prev,next)
        setNewUSer(res)
      }
      else{
        alert("This is Last Page")
       }
    }

  return (
    <div className=" w-[100%] h-[100vh] ">
      <div className="w-[80%] h-[40%] m-auto flex flex-col justify-evenly pt-[2rem] max-sm:w-[100%] max-sm:ml-[1rem] " >
      <input type="text" placeholder="Search e.g Sandeep" onChange={(e)=>setSearch(e.target.value)} className="w-[60%] h-[3rem] pl-[0.5rem] border-solid rounded-xl border-2 shadow-2xl max-sm:w-[80%] " />
      <h3 className=" text-xl font-bold " >Customer Details</h3>
      <h5 className="text-md " >The terms you are tracking</h5>

      <div className =" w-[100%] flex justify-around  " >
      <p className=" text-2xl ">Total User's : <span className="font-bold "> {user.length}</span> </p>
      </div>
      </div>

      <div className=" w-[80%]  m-auto  overflow-auto max-sm:w-[100%] "> 
        <div className=" w-[100%] h-[20%] flex flex-row justify-evenly  " >
        <div className=" w-[16%] h-[80%] mt-[0.5rem] text-center text-sm  break-words max-lg:text-[0.8rem] max-sm:w-[20%] max-sm:text-[0.5rem]   ">Username </div>
         <div className="w-[26%] h-[80%] mt-[0.5rem] text-center text-sm  break-words max-lg:text-[0.8rem] max-sm:w-[30%] max-sm:text-[0.6rem]   ">E-mail</div>
         <div className="w-[15%] h-[80%] mt-[0.5rem] text-center text-sm  break-words max-lg:text-[0.8rem] max-sm:w-[20%] max-sm:text-[0.6rem]   ">Phone</div>
         <div className="w-[10%] h-[80%] mt-[0.5rem] text-center text-sm  break-words max-lg:text-[0.8rem] max-sm:w-[20%] max-sm:text-[0.6rem]   ">Age</div>
         <div className="w-[15%] h-[80%] mt-[0.5rem] text-center text-sm  break-words max-lg:text-[0.8rem] max-sm:w-[20%] max-sm:text-[0.6rem]   ">Action </div>
        </div>
        <hr className="m-[0.5rem]" />
        {
          newUser.filter((item)=>(item.firstName.includes(search))).map((item)=>(<Item key={item.id} item={item} user={user} setUser={setUser} />))
        }
      </div>
      <div className =" w-[100%] flex justify-evenly mt-[3rem] " >
      <button type="button" onClick={Previous} className=" w-[10%] h-[2rem] border-strong rounded-md bg-red text-white max-sm:w-[20%] ">Prev</button>
      <button type="button" onClick={Next} className=" w-[10%] h-[2rem] border-strong rounded-md bg-red text-white max-sm:w-[20%] ">Next</button>
      </div>
   </div>
  )
}

export default Home
