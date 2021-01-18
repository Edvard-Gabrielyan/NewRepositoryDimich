import React from "react";
import MyPost from "./myPost/myPost";
import ProfileInfo from "./profileInfo/profileInfo";
import "./profile.css";

let Profile = (props) => {
	return (
		<div className="profile">
			<ProfileInfo />
			<MyPost messages={props.messages} 
				addStatePost={props.addStatePost}
				updateNewText={props.updateNewText}
				/>
		</div>
	);
};

export default Profile;
