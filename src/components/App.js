import { Route, Routes } from "react-router-dom";
import  "./App.css"
import Header from "./Header";
import React from "react";
import Home from "./Home"
import Cart from "./Cart"
import Menu from "./Menu"
import PastOrders from "./PastOrders"
function App() {
    return ( 
        <div className="App">
         <Header />
         <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/cart" element={<Cart />} />
         <Route path="/menu" element={<Menu />} />
         <Route path="/past" element={<PastOrders />} />
         </Routes>
         </div>
       
     
    );
}

export default App;