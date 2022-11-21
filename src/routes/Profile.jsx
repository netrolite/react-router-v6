import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
    const { username } = useParams();

    return (
        <h1>This is {username}'s profile page</h1>
    )
}