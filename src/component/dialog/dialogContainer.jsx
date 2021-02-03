import { sendMessageCreator, updateNewMessageBodysCreator } from "../../redux/dialogReducer.js";
import "./dialog.css";
import Dialog from "./dialog.jsx";
import {connect} from 'react-redux';

let mapStateToProps = (state) => {

	return {
		dialogPage: state.dialogsPage,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		updateNewMessageBody: (bodyText) => {
			dispatch(updateNewMessageBodysCreator(bodyText));
		},
		sendMessage: () => {
			dispatch(sendMessageCreator());
		},
	}
}

let DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer;
