const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: '1', name: 'Edvard' },
        { id: '2', name: 'Lev' },
        { id: '3', name: 'Rosy' },
        { id: '4', name: 'Dani' },
        { id: '5', name: 'Vlad' },
        { id: '6', name: 'Arakel' },
    ],
    messages: [
        { id: '1', message: 'Hy!!!!!' },
        { id: '2', message: 'How are you?' },
        { id: '3', message: 'How are you?' },
    ],
    newMessageBody: '',
}

let dialogReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newMessageText,
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}],
            }
        default:
            return state;
    }
}

export let updateNewMessageBodysCreator = (bodyText) => 
	({ type: UPDATE_NEW_MESSAGE_BODY, newMessageText: bodyText});
export let sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogReducer;