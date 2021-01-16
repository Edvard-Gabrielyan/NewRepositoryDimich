import React from 'react';
import './myPost.css';
import Post from './post/post.jsx';

let MyPost = () => {
	let postData = [
		{message:'Barev Arakel', likeCount:'Like 20'},
		{message:'Arakel du xncor es', likeCount:'Like 40'}
	]

	let postElement = postData.map(messages => <Post message={messages.message} likeCount={messages.likeCount} />)

	return (
		<div>
			<div>
				<div className="post-header">My posts</div>
				<div className="area">
					<div>
						<textarea></textarea>
					</div>
					<div>
						<button>Send</button>
					</div>
				</div>
			</div>
			{postElement}
		</div>
	);
}

export default MyPost;