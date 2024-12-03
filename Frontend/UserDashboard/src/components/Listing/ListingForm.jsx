import React from "react";
import Camp1 from "../../assets/camp_01.svg";
const ListingForm = () => {
  return (
    <div className="relative  bg-gray-100 min-h-full flex items-center justify-center p-4">
      {/* Background Image with Text */}
      <div className="relative hidden w-full sm:block sm:w-1/2 h-full p-4">
        <div className="w-[80%] h-[80%] mx-auto">
          <img src={Camp1} alt="Cammp Svg" className="w-full h-full" />
        </div>
      </div>

      <div className="relative bg-white w-full sm:w-1/2 max-w-lg py-3 px-6 shadow-xl rounded-lg mx-auto">
        <h2 className="text-lg text-center text-[#4F3420]  font-bold mb-4">
          Share the highlights of your villa, camp, or trek adventure!
        </h2>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name *"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>

          <input
            type="email"
            placeholder="Email ID *"
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="text"
            placeholder="Contact no. *"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="flex space-x-4">
            <select
              className="w-1/2 p-2 border border-gray-300 rounded"
              defaultValue=""
            >
              <option value="" disabled>
                Select your property location *
              </option>
              <option value="location1">Location 1</option>
              <option value="location2">Location 2</option>
            </select>
            <select
              className="w-1/2 p-2 border border-gray-300 rounded"
              defaultValue=""
            >
              <option value="" disabled>
                What type of property is it? *
              </option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="How many rooms?"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Where did you hear about us?"
              className="w-1/2 p-2 border border-gray-300 rounded"
            />
          </div>
          <input
            type="text"
            placeholder="Photos/Website link (if any)"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Describe your property"
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
          />
          <button
            type="submit"
            className="w-full bg-[#4F3420] text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Send a request
          </button>
        </form>
      </div>

      {/* Form Section */}
    </div>
  );
};

export default ListingForm;
