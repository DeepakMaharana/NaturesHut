import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
import ItemList from "./ItemList";

const CardCategory = ({ data, showItem, setShowIndex }) => {
  console.log("Category data",data);

  const handleClick = ()=>{
    console.log("clicked");
    setShowIndex();
  }

  return (
    <div>
      <div className="w-6/12 bg-gray-400 p-3 flex justify-between my-5 mx-auto" >
        <span onClick={handleClick}>{data.title}({data.itemCards.length})</span>
        <span>👇</span>
      </div>
      {
        showItem?
        <div className="categoryDetails w-6/12 px-3 my-5 mx-auto">
          {
            data.itemCards.map((item)=>{
              return <ItemList key={item.card.info.id} item={item}/>
            })
          }
        </div>:null
      }
    </div>
  );
};

export default CardCategory;
