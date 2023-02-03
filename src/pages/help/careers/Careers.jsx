import { useLoaderData, Link } from "react-router-dom";
import Career from "../../../components/Career";

export default function Careers() {
  const careers = useLoaderData();
  console.log(careers);

  const careersNodes = careers.map(career => (
    <Career {...career} key={career.id} />
  ))

  return (
    <div className="careers">
      {careersNodes}
    </div>
  )
}

export async function careersLoader() {
  const response = await fetch("http://localhost:4000/careers");
  return response.json();
}