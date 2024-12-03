import { useRouteError } from "react-router-dom";

const Error = ()=>
{
    const error =  useRouteError();
    console.log(error);
    return <>
        <h1>404 - Page Not Found</h1>
        <pre>
            {error}
        </pre>
    </>
}

export default Error;