import { Link } from "react-router-dom"

interface Params {
  id: number,
  title: string,
  location: string
}

export default function Career({ id, title, location }: Params) {
  return (
    <Link to={`${id}`}>
      <div className="career">
        <h3 className='title'>{title}</h3>
        <div className="location">{location}</div>
      </div>
    </Link>
  )
}
