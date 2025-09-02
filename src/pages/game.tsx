import { BrowserRouter, Link, useNavigate } from "react-router";
export default function Game(){
    const navigate=useNavigate()
    return(
        <>
        <h1>game</h1>
        <button onClick={()=>{
            navigate('/result')
        }}>end</button>
        </>
    )
}