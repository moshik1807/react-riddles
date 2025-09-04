import { useRef } from "react"
import { loadToken } from "../util/localstorege";
export default function Delete(){
    const id = useRef<HTMLInputElement>(null)
    const stored = loadToken("authToken"); 
    return(
        <>
        <h1>Delete</h1>
        <form action="">
            <input  ref={id} type="text" name="id" placeholder="enter id riddle"/>
            <button type="submit" onClick={(e)=>{
                e.preventDefault();
                const idRiddle={id:id}
                fetch('https://riddle-project-2.onrender.com/riddle/updeate', {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer ' + stored},
                    body: JSON.stringify(idRiddle)
                })
                }}>submit</button>
        </form>
        </>
    )
}