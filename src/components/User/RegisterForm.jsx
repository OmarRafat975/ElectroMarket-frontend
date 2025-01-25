/* eslint-disable react/prop-types */

export default function RegisterForm({ register }) {
  function onSubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="sm:max-w-md sm:mx-auto bg-gray-800 p-6 my-14 sm:rounded-lg shadow-lg text-white"
      >
        <h1 className="text-2xl font-bold mb-4 text-blue-500">
          <i className="bi bi-person-add mr-2"></i> Sign Up
        </h1>

        {/* Username Input */}
        <div className="mb-4">
          <label htmlFor="inputUser" className="block text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="inputUser"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="inputEmail1"
            className="block text-sm font-medium mb-2"
          >
            Email address
          </label>
          <input
            type="email"
            id="inputEmail1"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="inputPassword1"
            className="block text-sm font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="inputPassword1"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <label
            htmlFor="inputPassword2"
            className="block text-sm font-medium mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="inputPassword2"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Checkbox for Terms */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <input
              type="checkbox"
              id="exampleCheck1"
              className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
            />
            <label htmlFor="exampleCheck1" className="ml-2 text-sm">
              Accept All{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Terms
              </a>
            </label>
          </div>
          <p
            onClick={() => register(false)}
            className="text-blue-600 underline hover:text-blue-500 cursor-pointer"
          >
            Login Here !
          </p>
        </div>

        {/* Submit Button */}
        <div className="mb-3">
          <button
            type="submit"
            className="w-full px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-800 transition duration-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}
