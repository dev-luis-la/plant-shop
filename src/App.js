import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import { Route } from "react-router-dom";



const MonsteraPage =() =>(
  <div>
    <h1>Monstera Page</h1>
  </div>
);

function App() {
  return (
    <div >
    <Route exact path='/' component={HomePage}/>
      <Route  path='/shop/monsteras' component={MonsteraPage}/>
     
    </div>
  );
}

export default App;
