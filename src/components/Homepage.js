import React from 'react'
import "./Homepage.css";
import Navbar from "./NavbarTailwind"
import CardList from "./Card/Cardlist"
import Upload from "./Upload"


function Homepage() {
    return (
       <>
       <Navbar/>
       <Upload/>
       
       <CardList/>
     
     
       </>
    )
}

export default Homepage
