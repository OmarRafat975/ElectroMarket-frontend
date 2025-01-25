/* eslint-disable react/prop-types */
import { profileIcon } from '../../assets/icons';

export default function LoginForm({ register }) {
  function onSubmitHandler(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={onSubmitHandler}
      className="sm:max-w-md sm:mx-auto bg-gray-800 my-14 p-6 sm:rounded-lg shadow-lg text-white"
    >
      <div className="text-2xl font-bold mb-4 text-blue-500 flex items-center">
        {profileIcon} Login
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label htmlFor="inputEmail1" className="block text-sm font-medium mb-2">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail1"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-describedby="emailHelp"
        />
        <div
          id="emailHelp"
          className="mt-2 text-sm text-red-500 flex items-center"
        >
          <i className="bi bi-exclamation text-lg mr-2"></i>
          Do not Share Your Info with anyone.
        </div>
      </div>

      {/* Password Input */}
      <div className="mb-6">
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

      {/* Buttons */}
      <div className="sm:flex justify-between">
        <p
          type="submit"
          className="text-blue-600 underline hover:text-blue-500 cursor-pointer"
        >
          Forgot your password?
        </p>
        <p
          onClick={() => register(true)}
          className="text-blue-600 underline hover:text-blue-500 cursor-pointer"
        >
          Create account.
        </p>
      </div>
      <div className="mt-3">
        <button
          type="submit"
          className="w-full px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-800 transition duration-300"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
