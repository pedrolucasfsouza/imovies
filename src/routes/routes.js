import { BrowserRouter as Router, Switch, Route, Link, Routes, Match } from "react-router-dom";
import Index from "../components/header/index"


export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Index/>} />

            
        </Routes>
    )
}

