import React from "react";

import './App.css'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.comp.jsx";
import { Route } from "react-router-dom";

function App() {
  return (
    <div >
    <Route exact path='/' component={HomePage}/>
    <Route  path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
