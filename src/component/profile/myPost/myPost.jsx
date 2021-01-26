import React from 'react';
import './myPost.css';
import Post from './post/post.jsx';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state.js'

let MyPost = (props) => {
	let postElement = props.messages.posts.map(messages => <Post message={messages.message} likeCount={messages.likeCount} />)
	
	let newPostElement = React.createRef();
	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(text));
	}

	return (
		<div>
			<div>
				<div className="post-header">My posts</div>
				<div className="area">
					<div>
						<textarea ref={newPostElement} onChange={onPostChange} value={props.messages.newPostText} />
					</div>
					<div>
						<button onClick={addPost}>Send</button>
					</div>
				</div>
			</div>
			{postElement}
		</div>
	);
}

export default MyPost;