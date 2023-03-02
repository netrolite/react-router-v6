import { useEffect, useState, useTransition } from "react"
import { Navigate, useNavigate } from "react-router-dom";

export default function About() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();
  
  console.log(isLoggedIn);
  
  // the react rules are only broken when calling "useNavigate()" inside a hook like "useEffect".
  // it's completely fine to call "navigate()" (the function that hook returns)
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/help/contact");
    }
  }, [isLoggedIn])

  return (
    <>
      <h2>This is the about page</h2>
      <button onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>
    </>
  )
}
