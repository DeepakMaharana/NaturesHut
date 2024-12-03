import React, { useState } from "react";

const TrekkingForm = () => {
  const [trekData, setTrekData] = useState({
    trekName: "",
    difficultyLevel: "",
    duration: "",
    price: "",
    startDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setTrekData({
      ...trekData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Trekking Data:", trekData);
    alert("Trekking details submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Register a Trek</h2>

        {/* Trek Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Trek Name</label>
          <input
            type="text"
            name="trekName"
            value={trekData.trekName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Trek Name"
            required
          />
        </div>

        {/* Difficulty Level */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Difficulty Level</label>
          <select
            name="difficultyLevel"
            value={trekData.difficultyLevel}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Duration */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Duration (days)</label>
          <input
            type="number"
            name="duration"
            value={trekData.duration}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Duration in days"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price (USD)</label>
          <input
            type="number"
            name="price"
            value={trekData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Price per trek"
            required
          />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={trekData.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={trekData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Brief description of the trek"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit Trekking Details
        </button>
      </form>
    </div>
  );
};

export default TrekkingForm;
