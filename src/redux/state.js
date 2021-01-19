let renderEntireTree = () => {
	console.log(10214578);
}

let state = {
	profilePage: {
		posts: [
			{ id: 1, message: 'Barev Arakel', likeCount: 'Like 20' },
			{ id: 2, message: 'Arakel du xncor es', likeCount: 'Like 40' }
		],
		newPostText: 'Edvard Gabrielyan'
	},
	dialogsPage: {
		dialogs: [
			{ id: '1', name: 'Edvard' },
			{ id: '2', name: 'Lev' },
			{ id: '3', name: 'Rosy' },
			{ id: '4', name: 'Dani' },
			{ id: '5', name: 'Vlad' },
			{ id: '6', name: 'Arakel' }
		],
		messages: [
			{ message: 'Hy!!!!!' },
			{ message: 'How are you?' },
			{ message: 'How are you?' }
		]
	}
}

export let addStatePost = () => {
	let newPosts = {
		id: 5,
		message: state.profilePage.newPostText,
		likeCount: 'Like 15'
	};
	state.profilePage.posts.push(newPosts);
	renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText;
	renderEntireTree(state);

}

export const subscribe = (observer) => {
	renderEntireTree = observer;
}

export default state;