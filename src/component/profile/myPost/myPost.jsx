import React from 'react';
import './myPost.css';
import Post from './post/post.jsx';

let MyPost = (props) => {

	return (
		<div>
			<div>
				<div className="post-header">My posts</div>
				<div className="area">
					<textarea></textarea>
					<button>Send</button>
				</div>
			</div>
			<Post message='Barev Arakel' />
			<Post message='Vonc es' />
		</div>
	);
}

export default MyPost;