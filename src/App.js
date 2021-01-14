import React from 'react';
import Header from './component/header/header.jsx';
import NavBar from './component/navBar/navBar.jsx';
import Profile from './component/profile/profile.jsx';
import Dialog from './component/dialog/dialog.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<div className="main">
				<Header />
				<NavBar />
				<div className='content'>
					<Route path='/dialog' component={Dialog} />
					<Route path='/profile' component={Profile} />
				</div>
			</div>
		</BrowserRouter>
  );
}

export default App;
