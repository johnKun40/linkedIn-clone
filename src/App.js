import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Feed from './Feed';
import { useSelector, useDispatch } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Login from './Login';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()


//To stay logged in after refresh
  useEffect(() => {
      auth.onAuthStateChanged((userAuth) => {
        if(userAuth) {
          dispatch(login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
          );
        } else{
          dispatch(logout());
        }
      })
  },[dispatch])





  return (
    <div className="app">

    <Header />
    {
      !user ? (<Login />) : ( 
      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      )
    }


   

  

   
    </div>
  );
}

export default App;
