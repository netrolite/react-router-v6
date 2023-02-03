import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <>
      <h2>Page not found! (404 error)</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem consectetur incidunt quam expedita cupiditate tenetur at aliquid modi quisquam.</p>
      <Link to="/">
        <button>Back to Homepage</button>
      </Link>
    </>
  )
}
