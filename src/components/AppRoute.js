import React from "react";
import Bookingpage from "./Bookingpage";
import Login from "./Login";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navbar"
import Register from "./Register"
import UploadProduct from "./UploadProduct"

export default function AppRoute(){

    return(
    <>
    <Router>
        <Navbar/>
    <Switch>
        
        <Route path="/" exact component={Homepage} />
        <Route path="/register" component={Register} />
        <Route exact path="/bookingpage" component={Bookingpage} />
        <Route path="/login" component={Login} />
        <Route path="/uploadproduct" component={UploadProduct} />
    </Switch>
    </Router>
    
    </>
)

}