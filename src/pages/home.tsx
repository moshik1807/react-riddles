import { BrowserRouter, Link, useNavigate } from "react-router";
import Login from "./login";
import { useEffect } from "react";
import { loadToken } from "../util/localstorege";
import { jwtDecode } from "jwt-decode";
export default function Home(){

    type DecodedToken = {
        role: string;
    };

    const navigate=useNavigate()
    const stored = loadToken("authToken"); 
    useEffect(() => {
        if (stored) {
            try {
                const decoded: DecodedToken = jwtDecode(stored);
                if (decoded.role === "user") {
                    navigate("/user");
                } else if (decoded.role === "admin") {
                    navigate("/admin");
                } else {
                    alert("Login failed");
                }
            } catch (err) {
                console.error("Invalid token", err);
                navigate("/login");
            }
        }
    }, [stored, navigate]);

    
    return(
        <>
        <h1>home</h1>
        <button onClick={()=>{
            navigate("/login")
        }}>login</button>


        <button onClick={()=>{
            navigate("/signup")
        }}>signup</button>



        <button onClick={()=>{
            navigate("/level")
        }}>guest</button>
        </>
    )
}