import React from "react";
import { useLocation } from "react-router-dom";

const SearchScreen = () => {
  const location = useLocation();
  const { searchTerm, results } = location.state || {
    searchTerm: "",
    results: [],
  };

  console.log(searchTerm);
  console.log(results);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Main Container */}
      <div className="container mx-auto flex gap-8">
        {/* Left Sidebar Filters */}
        <div className="w-1/4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Display Total Price</h2>
          <div className="flex justify-start items-center mb-6">
            <input type="checkbox" id="totalPrice" className="" />
            <label htmlFor="totalPrice" className="text-gray-700">
              Price per night with taxes
            </label>
          </div>

          {/* Price Range */}
          <h2 className="text-lg font-semibold mb-4">Price Range</h2>
          <div className="flex justify-between items-center mb-6">
            <input type="range" min="1000" max="500000" className="w-full" />
          </div>

          <div className="flex justify-between mb-4">
            <input
              type="number"
              className="border w-20 text-center rounded-lg"
              defaultValue="1000"
            />
            <input
              type="number"
              className="border w-20 text-center rounded-lg"
              defaultValue="500000"
            />
          </div>

          {/* Room Selector */}
          <h2 className="text-lg font-semibold mb-4">No. of Rooms</h2>
          <div className="flex items-center mb-4">
            <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg mr-2">
              -
            </button>
            <input
              type="number"
              defaultValue="1"
              className="border w-16 text-center rounded-lg"
            />
            <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-lg ml-2">
              +
            </button>
          </div>

          {/* Top Filters */}
          <h2 className="text-lg font-semibold mb-4">Top Filters</h2>
          <div className="flex flex-col gap-4">
            <label>
              <input type="checkbox" className="mr-2" /> Pool / Jacuzzi
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> High Speed WiFi
            </label>
            <label>
              <input type="checkbox" className="mr-2" /> Pet Friendly
            </label>
          </div>
        </div>

        {/* Villas List */}
        <div className="w-3/4">
          {/* Sort Bar */}
          <div className="flex justify-between mb-4">
            <h1 className="text-2xl font-bold">Villas in Lonavala</h1>
            <select className="border p-2 rounded-lg">
              <option>Sort By: Most Loved</option>
            </select>
          </div>

          {/* Villa Card */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex">
            {/* Villa Image */}
            <img
              src="https://via.placeholder.com/300"
              alt="Villa"
              className="w-1/3 rounded-lg"
            />

            {/* Villa Info */}
            <div className="w-2/3 pl-6">
              <h2 className="text-xl font-semibold mb-2">
                Le Sutra Great Escapes - Udaan
              </h2>
              <p className="text-gray-700 mb-4">Lonavala, Maharashtra</p>
              <p className="mb-4">
                Upto 12 Guests &bull; 4 Rooms &bull; 4 Baths
              </p>

              <div className="flex items-center mb-4">
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full mr-2">
                  4.8
                </span>
                <p>of 5</p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-700 line-through">₹51,027</p>
                  <p className="text-green-600 text-xl font-bold">₹48,595</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* Another Villa Card */}
          <div className="bg-white rounded-lg shadow-md p-6 flex">
            <img
              src="https://via.placeholder.com/300"
              alt="Villa"
              className="w-1/3 rounded-lg"
            />

            <div className="w-2/3 pl-6">
              <h2 className="text-xl font-semibold mb-2">
                Paashaan W/ Heated Pool
              </h2>
              <p className="text-gray-700 mb-4">Lonavala, Maharashtra</p>
              <p className="mb-4">
                Upto 12 Guests &bull; 4 Rooms &bull; 4 Baths
              </p>

              <div className="flex items-center mb-4">
                <span className="bg-yellow-400 text-white px-3 py-1 rounded-full mr-2">
                  4.9
                </span>
                <p>of 5</p>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-700 line-through">₹51,027</p>
                  <p className="text-green-600 text-xl font-bold">₹48,595</p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
