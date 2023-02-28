import { useState, useEffect } from "react";
import { useParams, useLoaderData, LoaderFunction, LoaderFunctionArgs } from "react-router-dom";
import { ICareer } from "./Careers";


export default function CareerDetails() {
  const details = useLoaderData() as ICareer;

  console.log(details);

  return (
    <div className="career-details">
      <>
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
      </>
    </div>
  )
}


export async function careerDetailsLoader(careerId: LoaderFunctionArgs): Promise<any> {
  const response = await fetch(`http://localhost:3001/careers/${careerId}`);
  return await response.json();
}