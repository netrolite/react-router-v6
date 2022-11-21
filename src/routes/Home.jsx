import React from "react";
import { useNavigate } from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    
    return (
        <main>
            <h1>Home page</h1>
            <button onClick={() => navigate("/game")}>Play game</button>
        </main>
    )
}