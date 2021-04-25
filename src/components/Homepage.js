import React from 'react'
import Card2 from "./Card/Card2"
import Card3 from "./Card/Card3"
import Card1 from "./Card/Card1"
import "./Homepage.css";


function Homepage() {
    return (
       <>
       <div className="Homepage">
        <Card1/>
        <Card2/>
        <Card3/>
       </div>
     
       </>
    )
}

export default Homepage
