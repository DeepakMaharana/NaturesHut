import React, { useState } from "react";

const CampingForm = () => {
  const [campingData, setCampingData] = useState({
    siteName: "",
    location: "",
    pricePerNight: "",
    availableDates: "",
    amenities: "",
    description: "",
  });

  const handleChange = (e) => {
    setCampingData({
      ...campingData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Camping Data:", campingData);
    alert("Camping details submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Register a Camping Site</h2>

        {/* Site Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Site Name</label>
          <input
            type="text"
            name="siteName"
            value={campingData.siteName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Camping Site Name"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={campingData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Location"
            required
          />
        </div>

        {/* Price Per Night */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price Per Night (USD)</label>
          <input
            type="number"
            name="pricePerNight"
            value={campingData.pricePerNight}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Price per night"
            required
          />
        </div>

        {/* Available Dates */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Available Dates</label>
          <input
            type="text"
            name="availableDates"
            value={campingData.availableDates}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Available dates"
            required
          />
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Amenities</label>
          <input
            type="text"
            name="amenities"
            value={campingData.amenities}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Barbecue, Showers, Electricity"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={campingData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Brief description of the camping site"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit Camping Details
        </button>
      </form>
    </div>
  );
};

export default CampingForm;
