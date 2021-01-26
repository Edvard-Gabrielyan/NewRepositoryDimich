import React from "react";
import MyPost from "./myPost/myPost";
import ProfileInfo from "./profileInfo/profileInfo";
import "./profile.css";

let Profile = (props) => {
	return (
		<div className="profile">
			<ProfileInfo />
			<MyPost messages={props.messages} 
				dispatch={props.dispatch}
			/>
		</div>
	);
};

export default Profile;
