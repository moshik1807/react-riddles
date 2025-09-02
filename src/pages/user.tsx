import {useNavigate } from "react-router";
export default function User(){
    const navigate=useNavigate()
    return(
        <>
        <h1>user</h1>
        <button onClick={()=>{
            navigate("/read")
        }}>read</button>
        <button onClick={()=>{
            navigate("/leaderboard")
        }}>Leaderboard</button>
        <button onClick={()=>{
            navigate("/game")
        }}>game</button>
        </>
    )
}