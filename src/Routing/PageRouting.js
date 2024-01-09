import React from 'react';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AllEmployee from '../Pages/AllEmployee';
import Home from '../Pages/Home';
import AddEmployee from '../Pages/AddEmployee';
import EditEmployee from '../Pages/EditEmployee';

function PageRouting() {
  return (
    <div>
     <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route  path="/Signup" element={<Signup/>}></Route>
            <Route  path="/AllEmployee" element={<AllEmployee/>}></Route>
            <Route  path="/Login" element={<Login/>}></Route>
            <Route  path="/AddEmployee" element={<AddEmployee/>}></Route>
            <Route  path="/edit/:id" element={<EditEmployee/>}></Route>
        </Routes>
     </Router>
    </div>
  )
}

export default PageRouting