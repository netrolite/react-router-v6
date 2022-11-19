import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    console.log(error.statusText);

    return (
        <div id="error-page">
            <h1>Bruh</h1>
            <p>An unexpected error has occurred!</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}