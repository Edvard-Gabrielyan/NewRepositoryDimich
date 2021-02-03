import profileReducer from './profileReducer';
import dialogReducer from './dialogReducer';
import sidebarReducer from './sidebarReducer';

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
		},
		sidebar: {},
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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
		this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

		this._callSubscriber(this._state);
			
	},
}

export default store;