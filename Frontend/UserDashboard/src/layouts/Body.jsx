import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
// import { Toaster } from "react-hot-toast";
import { FooterComponent } from "../components/Footer";
import SearchModal from "../components/SearchModal/SearchModal";
import BottomNavigationModal from "../components/BottomNavigation/BottomNavigationModal";

export default function Body() {
   return <>
      <NavigationBar />
      <SearchModal/>
      <BottomNavigationModal/>
      <Outlet />
      {/* <Toaster/> */}
      <FooterComponent/>
    </>

}
