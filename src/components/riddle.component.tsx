import { useRef } from "react"

type RiddleType = {
  taskDescription: string;
  correctAnswer: string;
};
export default function Riddle(props:{riddle:RiddleType,setCountOrNavigate:Function, riddlesLength: number}){
    const x = useRef<HTMLInputElement>(null)
    const setCount = props.setCountOrNavigate();
        
    
    return(
        <>
            <h2>{props.riddle.taskDescription}</h2>
            <form action="">
            <input type="text" placeholder="enter" ref={x}/>
            <button onClick={(e)=>{
                e.preventDefault();
                if(props.riddle.correctAnswer == x.current?.value){
                     setCount(prev => prev +1)
                }
                else{
                    alert("wrong")
                }
            }}>submit</button>
            </form>
        </>
    )
}