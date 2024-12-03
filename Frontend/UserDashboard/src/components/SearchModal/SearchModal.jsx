"use client";
import {
  Label,
  Modal,
  Select,
} from "flowbite-react";

import React, { useRef, useState } from "react";
import Counter from "./Counter";
import { locationList } from "../../utils/mockData";
import { useNavigate } from "react-router-dom";

export function SearchModal() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [minCheckOutDate, setMinCheckOut] = useState(null);
  const location = useRef(null);
  const checkInDate = useRef(null);
  const checkOutDate = useRef(null);
  const adult_count = useRef(null);
  const child_count = useRef(null);
  const room_count = useRef(null);
  const infants_count = useRef(null);

  const today_date = new Date();
  const tomorrow_date = new Date(today_date);
  tomorrow_date.setDate(today_date.getDate() + 1)
  const minCheckInDate = tomorrow_date.getFullYear()+"-"+(tomorrow_date.getMonth()+1 < 10?"0"+tomorrow_date.getMonth()+1:tomorrow_date.getMonth()+1)+"-"+tomorrow_date.getDate();

  const navigate = useNavigate();

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }
  const submitSearch = async ()=>{
    console.log("Location",location.current.value);
    console.log("Check In Date",checkInDate.current.value);
    console.log("Adult Count",adult_count.current.value);
    console.log("Child Count",child_count.current.value);
    console.log("Infant Count",infants_count.current.value);
    console.log("Room Count",room_count.current.value);

    try {
      // Make API call here (replace with your actual API endpoint)
      // const response = await fetch(`https://api.example.com/search?q=${searchTerm}`);
      // const data = await response.json();

      // Navigate to the results page with the search results as state
      // navigate('/search', { state: { searchTerm, results: data } });
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
    

  }

  const setCheckInDate = (e)=>{
    const checkInDate = new Date(e.target.value);
    const minOutDate = new Date(checkInDate);
    minOutDate.setDate(checkInDate.getDate() + 1)
    setMinCheckOut(minOutDate);
  }

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="fixed bottom-5 right-5 z-10 bg-[#603F26] hover:bg-[#4e331f] p-3 rounded-[50%]"
      >
        <svg
          className="w-6 h-6 text-gray-800 text-white rounded-full"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="none"
          viewBox="0 0 26 26"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="2"
            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>
      </button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header className="border-b-2  border-[#795436] items-center px-6 py-3">Search</Modal.Header>
        <Modal.Body className="pt-3">
          <div className="space-y-6">
              <div className="m-0 mb-2 block">
                <Label htmlFor="location" value="Location" className="font-bold text-sm w-full" />
                <select id="location" className="w-full" ref={location} required  >
                  <option value="">Select</option>
                  {
                    locationList.map((item)=><option key={item.locationId} value={item.locationId}>{item.locationName.toUpperCase()}</option>)
                  }
                </select>
              </div>

              <div className="mb-2 block">
                <Label htmlFor="check_in"  value="Check In" className="font-bold text-sm w-full" />
                <input className="w-full" type="date" ref={checkInDate} min={minCheckInDate?minCheckInDate:null} onChange={setCheckInDate}  name="" id="" />
                {/* <Datepicker />
                <input type="date" name="" id=""  /> */}
              </div>

              <div className="mb-2 block">
                <Label htmlFor="check_out"  value="Check out" className="font-bold text-sm w-full"/>
                <input type="date" className="w-full" ref={checkOutDate} min={minCheckOutDate?minCheckOutDate.getFullYear()+"-"+(minCheckOutDate.getMonth()+1 < 10?"0"+minCheckOutDate.getMonth()+1:minCheckOutDate.getMonth()+1)+"-"+minCheckOutDate.getDate():null}  name="" id="" />
                {/* <Datepicker ref={checkOutDate} /> */}
              </div>

              <div className="mb-2 flex justify-between items-center">
                <div>
                    <h1 className="font-bold">Adult</h1>
                    <p className="text-xs text-slate-400">Age 13 years and more</p>
                </div>
                <Counter ref={adult_count}/>
              </div>

              <div className="mb-2 flex justify-between items-center">
                <div>
                    <h1 className="font-bold">Children</h1>
                    <p className="text-xs text-slate-400">Age 3 - 12 years</p>
                </div>
                <Counter ref={child_count} />
              </div>

              <div className="mb-2 flex justify-between items-center">
                <div>
                    <h1 className="font-bold">Infants</h1>
                    <p className="text-xs text-slate-400">Age 0 - 2 years</p>
                </div>
                <Counter ref={infants_count}/>
              </div>

              <div className="mb-2 flex justify-between items-center">
                <div>
                    <h1 className="font-bold">Rooms</h1>
                </div>
                <Counter ref={room_count}/>
              </div>

              <div className="mb-2 flex justify-center items-center">
                <button className="w-full text-center bg-[#795436] px-3 py-2 text-white rounded-sm" onClick={submitSearch}>Search</button>
              </div>


          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SearchModal;
