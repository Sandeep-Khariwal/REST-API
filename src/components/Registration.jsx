import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth,createUserWithEmailAndPassword} from "firebase/auth";

const defaultValue = {
  name:"",
  email:"",
  password:"",
  rePassword:""
}

const Registration = ({app}) => {

    const navigate = useNavigate()
    const [detail , setDetail] = useState(defaultValue)
    const [error,setError] = useState("")

    const onChangeHandler = (e) =>{
        setDetail({...detail,[e.target.name]:e.target.value})
        console.log(detail);
    }

    const Register = () =>{

      if(detail.password !== detail.rePassword){
        alert("Password Doesnt match")
      }
      else{
        // User is signed out
        console.log("userCreating");
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, detail.email, detail.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          setError("User Registered Successfully");
          setTimeout(()=>{
            navigate("/login")
          },3000)
        
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
        });
    
      }
  }

  return (
    <div className =" w-[100%] h-[100vh] bg-black flex flex-col justify-around items-center">
        <h3 className=" text-xl font-bold text-white " >Registration</h3>
        <h5 className="text-md text-white " >{error}</h5>

      <div className="w-[30%] h-[70%] bg-white flex flex-col justify-around items-center rounded-2xl max-lg:w-[50%] max-sm:w-[80%] " >
      <input type="text" placeholder="Enter name" name='name' onChange={onChangeHandler} className="w-[80%] h-[3rem] pl-[0.5rem] text-center border-solid rounded-xl border-2 shadow-2xl "/>
      <input type="email" placeholder="Enter E-mail" name='email' onChange={onChangeHandler} className="w-[80%] h-[3rem] pl-[0.5rem] text-center border-solid rounded-xl border-2 shadow-2xl "/>
      <input type="number" placeholder="Enter password" name='password' onChange={onChangeHandler} className="w-[80%] h-[3rem] pl-[0.5rem] text-center border-solid rounded-xl border-2 shadow-2xl "/>
      <input type="number" placeholder="Enter rePssword" name='rePassword' onChange={onChangeHandler} className="w-[80%] h-[3rem] pl-[0.5rem] text-center border-solid rounded-xl border-2 shadow-2xl "/>
      <div className =" w-[100%] flex justify-evenly" >
      <button type="button" onClick={Register} className=" w-[30%] h-[3rem] border-strong rounded-md bg-red text-white max-sm:text-sm  " >Registration</button>
      <button type="button" onClick={()=>navigate("/login")} className=" w-[20%] h-[3rem] border-strong rounded-md bg-red text-white max-sm:text-sm  " >Login</button>
      </div>
      </div>
    </div>
  )
}

export default Registration
