import React from "react";

import './App.css'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.comp.jsx";
import Header from "./components/header/header";
import Form from  "./pages/signin-out/signin-out"
import { Route, Switch } from "react-router-dom";
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  unsubcribeFromAuth = null

  componentDidMount(){
   this.unsubcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    });
  }
  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  render(){
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
}

export default App;
