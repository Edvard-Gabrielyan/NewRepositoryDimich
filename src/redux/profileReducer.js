const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        { id: 1, message: 'Barev Arakel', likeCount: 'Like 20' },
        { id: 2, message: 'Arakel du xncor es', likeCount: 'Like 40' }
    ],
    newPostText: 'Edvard Gabrielyan',
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPosts = {
                id: 5,
                message: state.newPostText,
                likeCount: 'Like 15'
            };
            return {
                ...state,
                posts: [...state.posts, newPosts],
                newPostText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;