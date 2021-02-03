import React from 'react';
import Header from './component/header/header';
import NavBar from './component/navBar/navBar';
import Profile from './component/profile/profile';
import DialogContainer from './component/dialog/dialogContainer.jsx';
import {Route} from 'react-router-dom';
import UsersContainer from "./component/users/UsersContainer";
import './App.css';

function App() {
    return (
        <div className="main">
            <Header/>
            <NavBar/>
            <div className='content'>
                <Route path='/dialogs' component={() => <DialogContainer/>}/>
                <Route path='/profile' component={() => <Profile/>}/>
                <Route path='/users' component={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
