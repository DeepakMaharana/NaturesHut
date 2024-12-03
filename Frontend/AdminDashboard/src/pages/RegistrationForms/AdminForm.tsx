import React, { useState } from "react";
import MultiSelect from '../../components/Forms/MultiSelect';

const AdminForm = () => {
  const [villaData, setVillaData] = useState({
    villaName: "",
    location: "",
    price: "",
    numberOfRooms: "",
    availability: "",
    amenities: "",
    description: "",
  });

  const handleChange = (e) => {
    setVillaData({
      ...villaData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Villa Data:", villaData);
    alert("Villa details submitted successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Register a Villa</h2>

        {/* Villa Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Villa Name</label>
          <input
            type="text"
            name="villaName"
            value={villaData.villaName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Villa Name"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={villaData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Location"
            required
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Price</label>
          <input
            type="number"
            name="price"
            value={villaData.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Price per night"
            required
          />
        </div>

        {/* Number of Rooms */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Number of Rooms</label>
          <input
            type="number"
            name="numberOfRooms"
            value={villaData.numberOfRooms}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Number of rooms"
            min={0}
            required
          />
        </div>

        {/* Availability */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Availability</label>
          <input
            type="text"
            name="availability"
            value={villaData.availability}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="e.g., Available, Not Available"
            required
          />
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Amenities</label>
          <MultiSelect id="multiSelect" />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            value={villaData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Brief description of the villa"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Submit Villa Details
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
