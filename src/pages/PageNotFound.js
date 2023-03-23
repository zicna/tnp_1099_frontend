import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PageNotFound(){
    const navigate = useNavigate()

    useEffect(()=>{
        setTimeout(()=> navigate("/"),3000)
    }, [])
    return (
        <h2>Page Not Found</h2>
    )
}