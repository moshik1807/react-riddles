import { BrowserRouter, Link, useNavigate } from "react-router";
import Login from "./login";
import { useState } from "react";

export default function Home(){
    const navigate=useNavigate()
    const[token,setToken]=useState()
    return(
        <>
        <h1>home</h1>
        <button onClick={()=>{
            navigate("/login")
        }}>login</button>


        <button onClick={()=>{
            navigate("/signup")
        }}>signup</button>



        <button onClick={()=>{
            navigate("/level")
        }}>guest</button>
        </>
    )
}