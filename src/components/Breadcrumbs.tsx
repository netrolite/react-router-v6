import { useLocation, Link } from "react-router-dom"

export default function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbsNodes = getBreadcrumbs(location);

  return (
    <div className="breadcrumbs-container">
      <ul className="breadcrumbs">
        <li className="breadcrumb">
          <Link to="/">home</Link>
        </li>
        {breadcrumbsNodes}
      </ul>
    </div>
  )
}

function getBreadcrumbs(location: ReturnType<typeof useLocation>) {
  const { pathname: url } = location;
  const splitUrl = url
    .split("/")
    .filter(pathPart => pathPart !== "");
  
  let currentLink = "";
  return splitUrl.map((pathPart, i) => {
    currentLink += `/${pathPart}`
    return (
      <li className="breadcrumb" key={i}>
        <Link to={currentLink}>
          {pathPart}
        </Link>
      </li>
    )
  })
}
