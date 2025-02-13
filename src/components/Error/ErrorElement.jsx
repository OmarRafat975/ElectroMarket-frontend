import { useRouteError } from 'react-router-dom';

export default function ErrorElement() {
  const error = useRouteError();
  console.log(error.statusText);

  return (
    <div className="text-center text-blue-600 text-2xl flex flex-col justify-center items-center min-h-[100vh]">
      <p>Error Please Try Again Later!</p>
      <p className="text-sm text-gray-600"> {error.statusText} </p>
    </div>
  );
}
