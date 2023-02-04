import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function CareerDetails() {
  const { careerId } = useParams();
  const [details, setDetails] = useState(null);

  console.log(details);

  return (
    <div className="career-details">
      <h2>Career details</h2>
      {
        details &&
        <>
          <div className="detail">
            <span className="detail-name">Title: </span>
            <span className="detail-value">{details.title}</span>
          </div>
          <div className="detail">
            <span className="detail-name">Location: </span>
            <span className="detail-value">{details.location}</span>
          </div>
          <div className="detail">
            <span className="detail-name">Salary: </span>
            <span className="detail-value">{details.salary}</span>
          </div>
        </>
      }
    </div>
  )
}


export async function careerDetailsLoader({ params }) {
  const { careerId } = params;
  return 
}