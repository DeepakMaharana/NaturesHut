import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useOnlineStatus } from "../hooks/useOnlineStatus";

import Slider from './ImageSlider/Slider'
import CardList from './Cards/CardList'
import SearchModal from './SearchModal/SearchModal'
import CardSlider from './Cards/CardSlider'
import Shimer from './shimer'
import villaList from "../utils/mockData";
import LocationSlider from './Location/LocationSlider';
import Loader from './Loader/Loader';
import CTAButton from './Listing/CTAButton';

const Dashboard = () => {
  const [cardsData, setCardsData] = useState([]);
  const onlineStatus =  useOnlineStatus();
  const notify = (msg) => toast(msg);

  console.log(villaList);
  
  const fetchData = async () => {
    setTimeout(()=>{
        setCardsData(villaList);
    }, 3000)
  };

  useEffect(() => {
    fetchData();
  }, []);


  if(!onlineStatus)
  {
    notify("You Are offline");
  }
  else
  {
    notify("You Are online");
  }

  if(cardsData.length === 0)
  {
    return <Loader/>
  }

  return (
    <div>
        <Slider/>
        <div>
          <LocationSlider heading={"Top Locations"}/>
          <CardList villaList={villaList} heading={"Trending"}/>
          <CTAButton/>
          <CardSlider villaList={villaList} heading={"Camping"}/>
        </div>

    </div>
  )
}

export default Dashboard