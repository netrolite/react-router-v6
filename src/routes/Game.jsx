import React from "react";
import { useNavigate } from "react-router-dom"

export default function Game() {
    const navigate = useNavigate();
    
    return (
        <>
            <h1>Game page</h1>
            <button onClick={() => navigate("/")}>Quit game</button>
        </>
    )
}