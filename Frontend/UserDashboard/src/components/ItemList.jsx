import React from 'react'
import { CDN_URL } from '../utils/constants'
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({item}) => {

  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    dispatch(addItem(item))
  }
    return (
        <div className="w-full flex my-2 border-2 border-gray-500">
          <div className="image-div w-3/12 flex flex-col justify-center p-2">
            <img className="w-full h-[80%]" src={CDN_URL+item.card.info.imageId} alt="" />
            <button className="btn btn bg-blue-600 font-white" onClick={()=>handleAddItem(item)}>Add+</button>
          </div>
          <div className="descp-div w-11/12 p-2">
            <h2 className="font-bold">{item.card.info.name}-{item.card.info.price}</h2>
            <p>
              {item.card.info.description}
            </p>
          </div>
        </div>
      )
}

export default ItemList