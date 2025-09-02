import {useNavigate } from "react-router";
export default function Level(){
    const navigate=useNavigate()

    return(
        <>
        <h1>choice level</h1>
        <select name="" id="">
            <option value="choice">choice</option>
            <option value="1">easy</option>
            <option value="2">medum</option>
            <option value="2">hard</option>
        </select>
        <button onClick={()=>{
            navigate("/game")
        }}>start game</button>
        </>
    )
}