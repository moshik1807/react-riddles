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

    function setCountOrNavigate(){
        return count < riddles.length -1 ? setCount : (_) => {
            navigate('/result')
        };
    }

    

    return(
        <>
        <h1>game</h1>
       {riddles.length && <Riddle riddlesLength={riddles.length} riddle={riddles[count]} setCountOrNavigate={setCountOrNavigate}/>} 
        </>
    )
}