import React, { useContext } from 'react';
import './Login.css';
import logo from '../../../image/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';







const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
      const handleGoogleSignIn = () =>{
          var provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(function(result) {
             const {displayName,email} = result.user;
             const signInUser ={name:displayName,email};
             setLoggedInUser(signInUser);
             history.replace(from);
            }).catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              var email = error.email;
              var credential = error.credential;
              
            });
            
      }
    return (
       
    <div className="top-area">
           <img className="logo" src={logo} alt=""/>
          <div className='login-area'> 
            <h5>Login with</h5>
              <br/>
    <button  onClick={handleGoogleSignIn} className="google-btn" >Continue with Google</button>
              <p>Don't have an account?<spam className='account-text'><u>Create a new account</u></spam></p>
             
              
           </div>
    </div>
    );
};

export default Login;