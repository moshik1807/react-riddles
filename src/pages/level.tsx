import {useNavigate } from "react-router";
export default function Level(){
    const navigate=useNavigate()

    return(
        <>
        <h1>choice level</h1>
        <button onClick={()=>{
            navigate("/game")
        }}>start game</button>
        </>
    )
}