import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Hamburger menu */}
        <div className="flex items-center">
          <button className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Title in the center */}
        <h1 className="text-xl font-bold text-center flex-grow">CIA3.com</h1>

        {/* Right-side links */}
        <div>
          <a href="/login" className="mr-4 hover:underline">Login</a>
          <span>or</span>
          <a href="/register" className="ml-4 hover:underline">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
