import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom";

const BottomNavigationModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the modal open/close
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Fixed button at the bottom */}
      <div className="fixed bottom-20 right-5 z-50">
        <button
          onClick={toggleModal}
          className={` ${isOpen?'text-[#603F26] bg-white hover:bg-white':"text-white  bg-[#603F26] hover:bg-[#4e331f]"} p-3 rounded-full shadow-lg focus:outline-none`}
        >
          {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 flex justify-center items-end md:items-center z-40">
          <div className="bg-white rounded-t-lg md:rounded-lg w-[300px] md:max-w-md p-6 shadow-lg">
            <h2 className="text-xl font-bold text-center text-[#603F26] p-2 border-b-2 border-[#4e331f]">Menu</h2>
            <ul className="list-none p-2">
                <li className="test-lg font-bold mb-2 bg-slate-300 hover:bg-[#c9bbaf] hover:text-[#4e331f] p-2 "> <Link to="/auth/signin">Sign-In</Link>/<Link to="auth/signup">Sign Up</Link></li>
                <li className="test-lg font-bold mb-2 bg-slate-300 hover:bg-[#c9bbaf] hover:text-[#4e331f] p-2 ">Saved</li>
                <li className="test-lg font-bold mb-2 bg-slate-300 hover:bg-[#c9bbaf] hover:text-[#4e331f] p-2 ">Checkout</li>
                <li className="test-lg font-bold mb-2 bg-slate-300 hover:bg-[#c9bbaf] hover:text-[#4e331f] p-2 ">Profile</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomNavigationModal;
