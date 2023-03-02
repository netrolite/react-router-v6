import { Link, useRouteError } from "react-router-dom";
export default function Error() {
  const error = useRouteError() as Error;

  return (
    <div className="error-page">
      <h1 className="mb-3">Error</h1>
      <p>{error.message}</p>
      <button>
        <Link to="/">Back to homepage</Link>
      </button>
    </div>
  )
}