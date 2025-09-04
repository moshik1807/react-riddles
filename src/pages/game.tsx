import { useEffect, useState } from "react";
import {useNavigate,useLocation } from "react-router";
import Riddle from "../components/riddle.component";
export default function Game(){
    const navigate=useNavigate()
    const location = useLocation();
    const level = location.state?.Level
    const [riddles, setRiddles] = useState<any[]>([]);
    const[count,setCount] = useState(0);
    
  useEffect(() => {
    fetch(`https://riddle-project-2.onrender.com/riddle/getByLevel?level=${level}`)
        .then((res) => res.json())
        .then((data) => setRiddles(data))
        .catch((err) => console.error("Error fetching riddles:", err));
    }, []);
    return(
        <>
        <h1>game</h1>
       {riddles.length && <Riddle riddle={riddles[count]} setCount={setCount}/>} 
        </>
    )
}