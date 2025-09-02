import { BrowserRouter, Link, useNavigate } from "react-router";
export default function Admin(){
    const navigate=useNavigate()
    return(
        <>
        <h1>Admin</h1>
        <button onClick={()=>{
            navigate("/create")
        }}>create</button>
        <button onClick={()=>{
            navigate("/read")
        }}>read</button>
        <button onClick={()=>{
            navigate("/delete")
        }}>delete</button>
        <button onClick={()=>{
            navigate("/updeate")
        }}>updeate</button>
        </>
    )
}