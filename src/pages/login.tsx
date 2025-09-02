import InputNameAndPassword from "../components/inputNameAndPassword"
import {useNavigate} from "react-router";

export default function Login(){
    const navigate=useNavigate()

    return(
        <>
        <h1>Login</h1>
        <InputNameAndPassword/>
        <button onClick={()=>{
            navigate("/admin")
        }}>admin</button>
        <button onClick={()=>{
            navigate("/user")
        }}>user</button>
        </>
    )
}