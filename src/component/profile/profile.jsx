import React from "react";
import ProfileInfo from "./profileInfo/profileInfo";
import "./profile.css";
import MyPostContainer from "./myPost/myPostContainer";

let Profile = (props) => {

	return (
		<div className="profile">
			<ProfileInfo />
			<MyPostContainer />
		</div>
	);
};

export default Profile;
