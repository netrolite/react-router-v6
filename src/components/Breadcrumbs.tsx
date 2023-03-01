import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom"

export default function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbsNodes = getBreadcrumbs(location);

  return (
    <div className="breadcrumbs-container">
      <ul className="breadcrumbs">{breadcrumbsNodes}</ul>
    </div>
  )
}

function getBreadcrumbs(location: ReturnType<typeof useLocation>) {
  const { pathname } = location;
  const splitPath = pathname.split("/");
  // if pathname is root, the splitPath is ["", ""]. So we remove the last emtpy string
  if (pathname === "/") splitPath.pop();
  
  let currentLink = "";
  return splitPath.map((pathPart, i) => {
    currentLink += `/${pathPart}`;
    
    return (
      <li className="breadcrumb" key={i}>
        <Link to={currentLink}>
          {pathPart === "" ? "Home" : pathPart}
        </Link>
      </li>
    )
  })
}