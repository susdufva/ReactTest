import React from "react";
import Bookingpage from "./booking/Bookingpage";
import Login from "./Login";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navbar"
import Register from "./Register"
import UploadProduct from "./UploadProduct"
import Firebase from "./FirebaseData"
import Checkout from "./checkout"
import PictureFetch from "./booking/Picturefetch"
import Bookinglist from "./booking/Bookinglist"

export default function AppRoute(){

    return(
    <>
    <Router>
        <Navbar/>
    <Switch>
        <Route path="/picture" component={PictureFetch} />
        <Route path="/list" component={Bookinglist} />

        <Route path="/" exact component={Homepage} />
        <Route path="/register" component={Register} />
        <Route path="/firebase" component={Firebase} />
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/bookingpage" component={Bookingpage} />
        <Route path="/login" component={Login} />
        <Route path="/uploadproduct" component={UploadProduct} />
    </Switch>
    </Router>
    
    </>
)

}