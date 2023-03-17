import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home"
import Profile from "../pages/Profile"
import Welcome from "../pages/Welcome"
import Contact from "../pages/Contact"
import PageNotFound from "../pages/PageNotFound";
import Auth from "../pages/Auth/Auth";

export default function RoutesContainer(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<Welcome/>}></Route>
                <Route path="/home" element={<Home />}></Route>
                {/* <Route path="/profile" children={()=><Profile></Profile>}></Route> */}
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/login" element={<Auth></Auth>}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </div>

    )
}