const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: 'Barev Arakel', likeCount: 'Like 20' },
				{ id: 2, message: 'Arakel du xncor es', likeCount: 'Like 40' }
			],
			newPostText: 'Edvard Gabrielyan',
		},
		dialogsPage: {
			dialogs: [
				{ id: '1', name: 'Edvard' },
				{ id: '2', name: 'Lev' },
				{ id: '3', name: 'Rosy' },
				{ id: '4', name: 'Dani' },
				{ id: '5', name: 'Vlad' },
				{ id: '6', name: 'Arakel' },
			],
			messages: [
				{ message: 'Hy!!!!!' },
				{ message: 'How are you?' },
				{ message: 'How are you?' },
			],
			newMessageBody: '',
		}
	},
	
	_callSubscriber() {
		console.log(1212);
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;

	},

	dispatch(action) {
		console.log(action)

		if(action.type === ADD_POST) {
			let newPosts = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likeCount: 'Like 15'
			};
			this._state.profilePage.posts.push(newPosts);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.newMessageText;
			this._callSubscriber(this._state);
		}
		else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({id: 3, message: body})
			this._callSubscriber(this._state);
		}
	},
}

export let addPostActionCreator = () => ({ type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => 
	({type: UPDATE_NEW_POST_TEXT, newText: text});

export let updateNewMessageBodysCreator = (bodyText) => 
	({ type: UPDATE_NEW_MESSAGE_BODY, newMessageText: bodyText});
export let sendMessageCreator = () => ({type: SEND_MESSAGE});

export default store;