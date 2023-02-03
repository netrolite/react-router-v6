import { Link } from "react-router-dom"

export default function Career({ id, title, location }) {
  return (
    <Link to={`${id}`}>
      <div className="career">
        <h3 className='title'>{title}</h3>
        <div className="location">{location}</div>
      </div>
    </Link>
  )
}
