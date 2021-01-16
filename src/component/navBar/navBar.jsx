import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

let NavBar = () => {
	return (
		<nav className="nav">
			<div className="nav-menu">
				<NavLink to='/profile'>Profile</NavLink>
			</div>
			<div className="nav-menu">
				<NavLink to='/dialogs'>Messages</NavLink>
			</div>
			<div className="nav-menu">
				News
			</div>
			<div className="nav-menu">
				Music
			</div>
			<div className="nav-menu">
				Setings
			</div>
		</nav>
	);
}

export default NavBar;