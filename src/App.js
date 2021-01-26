import React from 'react';
import Header from './component/header/header.jsx';
import NavBar from './component/navBar/navBar.jsx';
import Profile from './component/profile/profile.jsx';
import Dialog from './component/dialog/dialog.jsx';
import { Route } from 'react-router-dom';
import './App.css';

function App(props) {
	console.log(props.appState);
	console.log(props.store);

	return (
		<div className="main">
			<Header />
			<NavBar />
			<div className='content'>
				<Route path='/dialogs' component={() => <Dialog
					store={props.store}
				/>} />
				<Route path='/profile' component={() => <Profile
					messages={props.appState.profilePage}
					dispatch={props.dispatch}
				/>} />
			</div>
		</div>
	);
}

export default App;
