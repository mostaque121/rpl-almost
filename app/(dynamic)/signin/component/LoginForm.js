'use client';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('hey');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading

    // Simulate a login request (replace with actual login logic)
    try {
      console.log('Email:', email, 'Password:', password);
      // Simulate a delay for login process
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Handle success logic here, e.g., navigate to another page
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false); // End loading
    }
  };

  return (
    <div className="flex w-full items-center justify-center bg-gray-100">
      <div className="bg-white w-full rounded-lg">
        <form onSubmit={handleSubmit} className="w-full space-t-3">
          <div>
            <label htmlFor="email" className="block font-semibold text-sm text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="relative mt-4 md:mt-2">
            <label htmlFor="password" className="block font-semibold text-sm  text-gray-700">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              className="absolute top-9  right-3 flex items-center text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && (
            <div className="bg-red-100 flex items-center h-10 mt-4 w-full border border-red-400 text-red-700 px-4 rounded relative " role="alert">
              <span className="block text-sm sm:inline">{error}</span>
            </div>
          )}

          <button
            type="submit"
            className={`w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 ${isLoading ? 'cursor-not-allowed' : ''}`}
            disabled={isLoading} // Disable button during loading
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0a12 12 0 100 24v-4a8 8 0 01-8-8z"></path>
                </svg>
                Signing In...
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
