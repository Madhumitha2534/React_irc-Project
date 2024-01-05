import React from "react";
import DrawerAppBar from "./Navbar";
import { Outlet } from "react-router-dom";

const Home = () =>{
  return(
    
    <div >
      <DrawerAppBar/>

      <Outlet/>
      
    </div>
  )
}
export default Home;