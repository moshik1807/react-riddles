import { useRef } from "react"

type RiddleType = {
  taskDescription: string;
  correctAnswer: string;
};
export default function Riddle(props:{riddle:RiddleType,setCount:Function}){
    const x = useRef<HTMLInputElement>(null)
    return(
        <>
            <h2>{props.riddle.taskDescription}</h2>
            <form action="">
            <input type="text" placeholder="enter" ref={x}/>
            <button onClick={()=>{
                if(props.riddle.correctAnswer == x.current?.value){
                    props.setCount((prev:number)=>prev++)
                }
            }}>submit</button>
            </form>
        </>
    )
}