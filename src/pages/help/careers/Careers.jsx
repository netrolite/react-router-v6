export default function Careers() {
  return (
    <div className="careers">

    </div>
  )
}


// loader function
export async function careersLoader() {
  const response = await fetch("localhost:4000/careers");
  return response.json();
}