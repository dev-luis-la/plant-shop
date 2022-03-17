import React from "react";
import './App.css'
import { connect } from "react-redux";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shop.comp.jsx";
import Header from "./components/header/header";
import { setCurrentUser } from "./redux/user/user.actions";
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import Form from  "./pages/signin-out/signin-out"
import { Route, Switch } from "react-router-dom";


class App extends React.Component {


                                                                  
  unsubcribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;

   this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      
      userRef.onSnapshot(snapShot =>{
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
    }
      setCurrentUser({currentUser: userAuth});
    });
  }
  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  
  render(){
    return (
      <div >
      <Header />
      <Switch>
         <Route exact path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route  path='/signin' component={Form}/>
          
      </Switch>
     
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
