import { LoaderFunction, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import Career from "../../components/Career";

export interface ICareer {
  id: number,
  title: string,
  salary: number,
  location: string
}

export default function Careers() {
  const careers = useLoaderData() as ICareer[];

  const careersNodes = careers.map(career => (
    <Career {...career} key={career.id} />
  ))

  return (
    <div className="careers">
      <h2>Careers</h2>
      {careersNodes}
    </div>
  )
}

export async function careersLoader() {
  const response = await fetch("http://localhost:3001/careers");
  if (!response.ok) throw new Error("Could not fetch careers");

  return await response.json();
}