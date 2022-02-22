import React from "react";

import './App.css'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.comp.jsx";
import Header from "./components/header/header";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div >
    <Header/>
    <switch>
       <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
    </switch>
   
    </div>
  );
}

export default App;
