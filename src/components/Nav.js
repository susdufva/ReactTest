import React from 'react'
import "./Nav.css";
import {Link} from "react-router-dom";


function Nav() {
    return (
        <>
        <div className="Nav">
  
            <nav className="Link">
             {/* <img src={require("../picture.png")} alt=" "> */}
             <div className="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-bold py-3 mr-8">
              <Link className="Home" to="/">Hemsida</Link>  
              <Link className="Fri" to="/frisor">Frisör</Link> 
              <Link className="Mass" to="/massage">Massage</Link> 
              <Link className="Booked" to="/booked">Boka</Link> 
              <Link className="Book" to="/bookingpage">Mina bokningar</Link>
              <Link className="Page" to="/mypage">Logga in</Link>
              </div>
            </nav>
            
        </div>
        </>
    )
}

export default Nav
