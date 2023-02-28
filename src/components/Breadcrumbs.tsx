import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom"

export default function Breadcrumbs() {
  const location = useLocation();
  console.log(location);

  console.log("before");
  let currentLink = "";
  const breadcrumbsNodes = location.pathname.split("/")
    .filter(crumb => crumb !== "")
    .map(crumb => {
      currentLink += `/${crumb}`;
      console.log(currentLink);
      return (
        <li className="breadcrumb">
          <Link to={currentLink}>
            {crumb}
          </Link>
        </li>
      )
    })

  return (
    <div className="breadcrumbs-container">
      <ul className="breadcrumbs">{breadcrumbsNodes}</ul>
    </div>
  )
}