import React from "react";
import DialogItems from "./dialogItem/dialogItem.jsx";
import Message from "./message/message.jsx";
import { sendMessageCreator, updateNewMessageBodysCreator } from '../../redux/state.js';
import "./dialog.css";

function Dialog(props) {
	let state = props.store.getState().dialogsPage;

	let dialogElement = state.dialogs.map((dialog) => (
		<DialogItems id={dialog.id} name={dialog.name} />
	));
	let messageElement = state.messages.map((messages) => (
		<Message message={messages.message} />
	));

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}

	let onChangeMessage = (e) => {
		let bodyText = e.target.value;
		props.store.dispatch(updateNewMessageBodysCreator(bodyText));
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
