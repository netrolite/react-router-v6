import { useEffect, useState, useTransition } from "react"
import { Navigate, useNavigate } from "react-router-dom";

export default function About() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  
  console.log(isLoggedIn);
  
  if (!isLoggedIn) {
    // removes the current url from browser history
    // if the user then clicks on "go back" button,
    // it will redirect to the page opened before /about (because /about is deleted)
    return <Navigate to="/help/contact" replace={true} />
  }

  return (
    <>
      <h2>This is the about page</h2>
      <button onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>
    </>
  )
}
