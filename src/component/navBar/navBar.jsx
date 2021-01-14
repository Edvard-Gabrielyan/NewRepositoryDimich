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
				<NavLink to='/dialog'>Messages</NavLink>
			</div>
			<div className="nav-menu">
				<a>News</a>
			</div>
			<div className="nav-menu">
				<a>Music</a>
			</div>
			<div className="nav-menu">
				<a>Settings</a>
			</div>
		</nav>
	);
}

export default NavBar;