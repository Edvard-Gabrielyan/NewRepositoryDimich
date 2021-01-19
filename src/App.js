import React from 'react';
import Header from './component/header/header.jsx';
import NavBar from './component/navBar/navBar.jsx';
import Profile from './component/profile/profile.jsx';
import Dialog from './component/dialog/dialog.jsx';
import { Route } from 'react-router-dom';
import './App.css';

function App(props) {
	return (
			<div className="main">
				<Header />
				<NavBar />
				<div className='content'>
					<Route path='/dialogs' component={() => <Dialog
						dialogs={props.appState.dialogsPage.dialogs}
						messages={props.appState.dialogsPage.messages}
						 />} />
					<Route path='/profile' component={() => <Profile
						messages={props.appState.profilePage}
						addStatePost={props.addStatePost}
						updateNewText={props.updateNewText}
					/>} />
				</div>
			</div>
  );
}

export default App;
