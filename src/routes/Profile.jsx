import React from "react";
import { useParams, useNavigate } from "react-router-dom"

export default function Profile() {
    const { username } = useParams();
    const navigate = useNavigate();

    return (
        <>
            <h1>This is {username}'s profile page</h1>
            <button onClick={() => navigate("/")}>Homepage</button>
        </>
    )
}