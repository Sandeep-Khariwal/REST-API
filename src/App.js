import axios from "axios";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Registration from "./components/Registration";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKKN-qWX2cx04uiGrgl9CktVGJZXPZXEw",
  authDomain: "assign1-bd055.firebaseapp.com",
  projectId: "assign1-bd055",
  storageBucket: "assign1-bd055.appspot.com",
  messagingSenderId: "254764885340",
  appId: "1:254764885340:web:30d95d9ec1df5dec2ccd99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {

  const url = "https://dummyjson.com/users"
  const [user , setUser] = useState([])
  const [isLogin , setIsLogin] = useState(false)


  useEffect(()=>{
    const fetchData = async() =>{
      const resp = await getData(url)
      setUser(resp)
    }
    fetchData()
  },[url])

  const getData=async(url)=>{
      try {
        return await axios.get(url).then((res)=> res.data.users )
      } catch (error) {
        console.log("Error in fetching data",error);
      }
  }

  return (
  <div>
    <Routes>
      <Route exact path="/" element={ isLogin? <Home user={user} setUser={setUser}/> : <Login setIsLogin={setIsLogin} app={app} /> }/>
      <Route exact path="/login" element={<Login setIsLogin = {setIsLogin} app={app} />}/>
      <Route exact path="/register" element={<Registration app={app} />}/>
    </Routes>
  </div>
  );
}

export default App;
