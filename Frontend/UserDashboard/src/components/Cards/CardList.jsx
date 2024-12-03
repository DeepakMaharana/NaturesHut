"use client";

import { useRef, useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

import Cards, { withPromotedCard } from "./Cards";
// import resList from '../utils/mockData';
import "../../css/card_list.css";
import { Link } from "react-router-dom";

const PromotedCard = withPromotedCard(Cards);

function CardList({ villaList, heading }) {
  const [activeTab, setActiveTab] = useState(0);
  const [listOfCards, setListOfCards] = useState(villaList);
  const [filteredCards, setFilteredCard] = useState(villaList);
  const [searchText, setSearchText] = useState("");
  return (
    <div className="py-6 bg-white shadow-sm">
        <div className="flex flex-col gap-3 ">
          <h1 className="text-center text-3xl sm:text-4xl  lg:text-5xl font-bold mb-4 text-[#614027] uppercase">
            {heading}
          </h1>
          <div className="flex flex-wrap justify-center sm:overflow-x-auto gap-3">
            <button className="px-4 py-2 hover:border-2 box-border border-[#614027] bg-[#795436] bg-opacity-40 text-[#614027] rounded-sm">
              All
            </button>
            <button className="px-4 py-2 hover:border-2 box-border border-[#614027] bg-[#795436] bg-opacity-40 text-[#614027] rounded-sm">
              Lonavala
            </button>
            <button className="px-4 py-2 hover:border-2 box-border border-[#614027] bg-[#795436] bg-opacity-40 text-[#614027] rounded-sm">
              Alibaug
            </button>
            <button className="px-4 py-2 hover:border-2 box-border border-[#614027] bg-[#795436] bg-opacity-40 text-[#614027] rounded-sm">
              Goa
            </button>
            <button className="px-4 py-2 hover:border-2 box-border border-[#614027] bg-[#795436] bg-opacity-40 text-[#614027] rounded-sm">
              Shimla
            </button>
            <button className="px-4 py-2 hover:border-2 box-border border-[#614027] bg-[#795436] bg-opacity-40 text-[#614027] rounded-sm">
              Manali
            </button>
          </div>

          <div className="list-container px-4">
            {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}
            {filteredCards.map((item, index) =>
              index < 10 ? (
                <Link to={"details/" + item.id} key={item.id}>
                  <Cards resData={item} />
                </Link>
              ) : null
            )}
          </div>
        </div>
    </div>
  );
}

export default CardList;
