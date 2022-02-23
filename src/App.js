import React from "react";

import './App.css'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.comp.jsx";
import Header from "./components/header/header";
import Form from  "./pages/signin-out/signin-out"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div >
    <Header/>
    <Switch>
       <Route exact path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route  path='/signin' component={Form}/>
        
    </Switch>
   
    </div>
  );
}

export default App;
