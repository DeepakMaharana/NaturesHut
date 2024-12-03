import React, { useState } from "react";
import { useEffect, useState } from "react";
import { DETAIL_API } from "../utils/constants";

const useFetchCardDetails = ({ resId }) => {

  const [cardInfo, setCardInfo]  = useState([]);

  useEffect(() => {
    fetchCardDetails();
  }, []);

  const fetchCardDetails = async () => {
    const response = await fetch(
      DETAIL_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const jsonData = await response.json();
    setCardInfo(jsonData.data);
  };


  return cardInfo;
};

export default useFetchCardDetails;
