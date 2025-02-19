/* eslint-disable react/prop-types */

import { registerIcon } from '../../assets/icons';

export default function RegisterForm({
  register,
  onSubmitHandler,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  loading,
}) {
  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="sm:max-w-md sm:mx-auto bg-gray-800 p-6 my-14 sm:rounded-lg shadow-lg text-white"
      >
        <h1 className="text-2xl font-bold mb-4 text-blue-500 flex items-center">
          {registerIcon} Sign Up
        </h1>

        {/* Username Input */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
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
            disabled="loading"
            className="w-full px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-800 transition duration-300"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>
      </form>
    </>
  );
}
