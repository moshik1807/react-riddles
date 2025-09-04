import { useState } from "react";
import {useNavigate } from "react-router";

export default function Level(){
    const navigate=useNavigate()
    const[Level,setLevel]=useState("choice")
    return(
        <>
        <h1>choice level</h1>
        <select value={Level} onChange={(e)=>setLevel(e.target.value)}>
            <option value="choice">choice</option>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
        </select>
        <button onClick={()=>{
            navigate("/game", { state: { Level } })
        }}>start game</button>
        </>
    )
}