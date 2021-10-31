import React from "react";
import { BrowserRouter as Router, Routes, Switch, Route, Link, Match } from "react-router-dom";
import Index from "../pages/home/index"
import Liked from "../pages/liked/index"

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Index/>} />
            <Route path="/liked" element={<Liked/>} />
        </Routes>
    )
}

