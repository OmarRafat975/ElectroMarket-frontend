import { Link } from 'react-router-dom';

export default function PaginationLinks() {
  return (
    <div>
      <ul className="flex justify-center items-center gap-2 flex-wrap">
        <li>
          <Link className="m-auto shadow-md block text-center px-4 py-2 border w-fit text-gray-900 bg-gray-100 hover:text-blue-600 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium dark:focus:ring-blue-500">
            1
          </Link>
        </li>
        <li>
          <Link className="m-auto shadow-md block text-center px-4 py-2 border w-fit text-gray-900 bg-gray-100 hover:text-blue-600 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium dark:focus:ring-blue-500">
            2
          </Link>
        </li>
        <li>
          <Link className="m-auto shadow-md block text-center px-4 py-2 border w-fit text-gray-900 bg-gray-100 hover:text-blue-600 hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-100 font-medium dark:focus:ring-blue-500">
            3
          </Link>
        </li>
      </ul>
    </div>
  );
}
