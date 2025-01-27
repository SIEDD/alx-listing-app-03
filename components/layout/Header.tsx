import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/path-to-logo/logo.png" alt="Logo" className="h-8 w-8" />
        <span className="text-xl font-bold">StayFinder</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search for properties..."
          className="border rounded-md px-4 py-2 text-sm w-64 focus:outline-none focus:ring focus:border-blue-300"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Search
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Rooms
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Mansion
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          Countryside
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-500">
          More
        </a>
      </nav>

      {/* Sign In/Sign Up */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-blue-500">Sign In</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
