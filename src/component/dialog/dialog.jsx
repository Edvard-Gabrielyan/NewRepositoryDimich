import React from "react";
import DialogItems from "./dialogItem/dialogItem.jsx";
import Message from "./message/message.jsx";
import "./dialog.css";

function Dialog(props) {
	let state = props.dialogPage;
	let dialogElement = state.dialogs.map((dialog) => (
		<DialogItems id={dialog.id} key={dialog.id}  name={dialog.name} />
	));
	let messageElement = state.messages.map((messages) => (
		<Message message={messages.message} key={messages.id} />
	));

	let onSendMessageClick = () => {
		props.sendMessage();
	}

	let onChangeMessage = (e) => {
		let bodyText = e.target.value;
		props.updateNewMessageBody(bodyText);
	}

	return (
		<div className="dialogs">
			<div className="dialog-items">{dialogElement}</div>
			<div className="messages">
				<div>{messageElement}</div>
				<div>
					<textarea
						placeholder='Enter Your tekst'
						value={state.newMessageBody}
						onChange={onChangeMessage}
					/>
				</div>
				<div>
					<button onClick={onSendMessageClick}>Send</button>
				</div>
			</div>
		</div>
	);
}

export default Dialog;
