import { useLoaderData } from "react-router-dom";
import Career from "../../components/Career";

export default function Careers() {
  const careers = useLoaderData();

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
  return response.json();
}