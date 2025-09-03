import { useRef } from "react"
import { loadToken } from "../util/localstorege"
export default function updeate(){
    const form = useRef<HTMLFormElement>(null)
    const id=useRef<HTMLInputElement>(null)
    const name=useRef<HTMLInputElement>(null)
    const taskDescription=useRef<HTMLInputElement>(null)
    const correctAnswer=useRef<HTMLInputElement>(null)
    const hint=useRef<HTMLInputElement>(null)
    
    const stored = loadToken("authToken"); 

    return(
        <>
        <h1>updeate</h1>
        <form ref={form} action="">
            <input type="text" name="id" placeholder="enter id" ref={id}/>
            <input type="text" name="name" placeholder="enter name" ref={name}/>
            <input type="text" name="taskDescription" placeholder="enter taskDescription" ref={taskDescription}/>
            <input type="text" name="correctAnswer" placeholder="enter correctAnswer" ref={correctAnswer}/>
            <input type="text" name="hint" placeholder="enter hint" ref={hint}/>
            <button type="submit" onClick={(e)=>{
                e.preventDefault();
                const formData = new FormData(form.current as HTMLFormElement);
                const riddle: Record<string, any> = {};

                formData.forEach((value, key) => {
                    riddle[key] = value;  
                });
                fetch('http://localhost:2123/riddle/updeate', {
                    method: 'PUT',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer ' + stored},
                    body: JSON.stringify(riddle)
                })
                }}>submit</button>
        </form>
        </>
    )
}