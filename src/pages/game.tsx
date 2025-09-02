import {useNavigate } from "react-router";
export default function Game(){
    const navigate=useNavigate()
    return(
        <>
        <h1>game</h1>
        <p>question:1 + 1</p>
        <form action="">
            <input type="text" placeholder="answer"/>
            <button type="submit" onClick={()=>{
                alert("correct answer")
            }}>submit</button>
        </form>
        <button onClick={()=>{
            navigate('/result')
        }}>end</button>
        </>
    )
}