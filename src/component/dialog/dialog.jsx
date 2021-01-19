import React from "react";
import DialogItems from "./dialogItem/dialogItem.jsx";
import Message from "./message/message.jsx";
import "./dialog.css";

function Dialog(props) {
	let dialogElement = props.dialogs.map((dialog) => (
		<DialogItems id={dialog.id} name={dialog.name} />
	));
	let messageElement = props.messages.map((messages) => (
		<Message message={messages.message} />
	));

	return (
		<div className="dialogs">
			<div className="dialog-items">{dialogElement}</div>
			<div className="messages">{messageElement}</div>
		</div>
	);
}

export default Dialog;
