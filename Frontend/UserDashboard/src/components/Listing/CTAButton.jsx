import React from 'react';
import {Link} from "react-router-dom";

const CTAButton = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-orange-300 to-orange-400 w-full max-w-6xl p-4 rounded-lg shadow-lg">
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-bold">LIST YOUR PROPERTY WITH US!</h2>
          <p className="text-gray-600 mt-2">
            Join our network and turn your property into a high-revenue holiday destination!
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="bg-[#603F26] text-white py-2 px-6 rounded-full hover:bg-[#4e331f] transition-all">
            <Link to="/listing">
              List Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTAButton;
