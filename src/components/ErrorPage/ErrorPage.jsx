import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error=useRouteError();
  return (
    <div className="mx-auto w-96 mt-60 text-center">
      <h1 className="text-red-600 text-xl font-medium">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
