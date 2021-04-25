import React from "react";
import Bookingpage from "./Bookingpage";
import Mypage from "./Mypage";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Homepage from "./Homepage";
import Nav from "./Nav"
import Frisor from "./Card/Frisor"
import Massage from "./Card/Massage"
import Booked from "./Booked"


export default function AppRoute(){

    return(
    <>
    <Router>
        <Nav/>
    <Switch>
        
        <Route path="/" exact component={Homepage} />
        <Route path="/frisor" component={Frisor} />
        <Route path="/massage" component={Massage} />
        <Route path="/booked" component={Booked} />
        <Route exact path="/bookingpage" component={Bookingpage} />
        <Route path="/mypage" component={Mypage} />
    </Switch>
    </Router>
    
    </>
)

}