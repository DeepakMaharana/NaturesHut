import React from "react";

const ProfileForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-6">Profile</h1>
        <hr className="mb-6" />
        
        {/* Form */}
        <form className="space-y-6">
          {/* First and Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name *</label>
              <input
                type="text"
                placeholder="First Name"
                defaultValue="Deepak"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name *</label>
              <input
                type="text"
                placeholder="Last Name"
                defaultValue="Maharana"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Gender and Date of Birth */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Gender *</label>
              <select
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Date of Birth *</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400">
                  🗓️
                </span>
              </div>
            </div>
          </div>

          {/* Email ID */}
          <div>
            <label className="block text-gray-700">Email ID *</label>
            <input
              type="email"
              placeholder="Email"
              defaultValue="itgeek147@gmail.com"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Residential City */}
          <div>
            <label className="block text-gray-700">Residential City *</label>
            <input
              type="text"
              placeholder="City"
              defaultValue="Mumbai"
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Mobile Number */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="block text-gray-700">Country Code</label>
              <input
                type="text"
                defaultValue="+91"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700">Mobile Number *</label>
              <input
                type="tel"
                placeholder="Mobile Number"
                defaultValue="7021654766"
                className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Update Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
