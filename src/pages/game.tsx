import { useEffect, useState } from "react";
import {useNavigate,useLocation } from "react-router";
export default function Game(){
    const navigate=useNavigate()
    const location = useLocation();
    const level = location.state?.Level
    const [riddles, setRiddles] = useState<any[]>([]);
    
  useEffect(() => {
    fetch(`https://riddle-project-2.onrender.com/riddle/getByLevel?level=${level}`)
        .then((res) => res.json())
        .then((data) => setRiddles(data))
        .catch((err) => console.error("Error fetching riddles:", err));
    }, []);

    return(
        <>

        <p>{JSON.stringify(riddles, null, 2)}</p>



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