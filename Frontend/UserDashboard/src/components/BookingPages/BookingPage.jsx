import React from 'react';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Main Container */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Left Side: Booking Information */}
        <div className="lg:col-span-2 bg-white shadow rounded-lg p-6 space-y-6">
          {/* Villa Info */}
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Le Sutra Great Escapes - Udaan</h2>
              <p className="text-gray-500">Lonavala, Maharashtra</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500 font-semibold text-lg">4.8 ⭐</span>
            </div>
          </div>
          
          {/* Check-in / Check-out Info */}
          <div className="flex flex-col sm:flex-row gap-10 items-center rounded-lg">
            <img src="" className='w-full sm:w-[200px] h-[200px] sm:h-[100px]' alt="" />
            <div className='flex gap-10 justify-between'>
              <div>
                <p className="text-sm text-gray-600">Check-In</p>
                <p className="font-medium">Wed 23 Oct 2024</p>
                <p className="text-sm text-gray-600">(From 02:00 PM)</p>
              </div>

              <div>
                <p className="text-sm text-gray-600">Check-Out</p>
                <p className="font-medium">Thu 24 Oct 2024</p>
                <p className="text-sm text-gray-600">(Until 11:00 AM)</p>
              </div>
            </div>
          </div>

          {/* Room Info */}
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🛏️</span>
              <span>1 Room | 4 Baths</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg">👤</span>
              <span>2 Guests (2 Adults)</span>
            </div>
          </div>

          {/* Meals Section */}
          <div>
            <h3 className="text-lg font-semibold">Meals</h3>
            <p className="text-gray-500">
              Indulge in an all-day meal package of freshly prepared North Indian vegetarian and non-vegetarian local specialties.
            </p>
            <div className="mt-2">
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">Mix Menu</span>
              <button className="text-blue-500 ml-4">View More</button>
            </div>
          </div>

          {/* Booking & Cancellation Policy */}
          <div>
            <h3 className="text-lg font-semibold">Booking & Cancellation policy</h3>
            <button className="text-red-500 mt-2">View Policy</button>
          </div>
        </div>
        
        {/* Right Side: Price Details */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Price details</h3>
          
          {/* Price Breakdown */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Rental Charges</span>
              <span>₹24,298</span>
            </div>
            <div className="flex justify-between">
              <span>GST (As per government guidelines)</span>
              <span>₹4,374</span>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="bg-green-50 p-4 rounded-lg my-4">
            <div className="flex justify-between items-center">
              <span>DIWALI10</span>
              <button className="text-blue-500">Apply</button>
            </div>
            <p className="text-sm text-green-600 mt-2">Apply to save up to ₹2,000</p>
          </div>

          {/* Total Payable */}
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Payable</span>
            <span>₹28,672</span>
          </div>
          <div className="text-sm text-gray-500 mt-2 line-through">₹30,150</div>

          {/* Savings */}
          <div className="bg-green-50 p-4 rounded-lg my-4">
            <span className="text-green-600">You are saving ₹1,216 with your booking</span>
          </div>

          {/* Terms & Conditions */}
          <div className="text-sm text-gray-500 my-4">
            <input type="checkbox" className="mr-2" />
            I have read and accepted the 
            <span className="text-blue-500 cursor-pointer"> Terms & Conditions, Privacy Policies, Cancellation Policy </span>
            and <span className="text-blue-500 cursor-pointer">Indemnity Form</span>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
