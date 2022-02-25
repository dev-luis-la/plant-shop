import React from "react";

import './App.css'
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.comp.jsx";
import Header from "./components/header/header";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import Form from  "./pages/signin-out/signin-out"
import { Route, Switch } from "react-router-dom";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }
                                                                        
  unsubcribeFromAuth = null

  componentDidMount(){
   this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot =>{
        this.setState({
          currentUser:{
            id: snapShot.id,
            ...snapShot.data()
          }
        },() => {
          console.log(this.state);
        }
        )
      })
    }else{
      this.setState({currentUser: userAuth});
    }
    });
  }
  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  
  render(){
    return (
      <div >
      <Header currentUser={this.state.currentUser}/>
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
