import React from 'react';
import './post.css';

let Post = (props) => {
	return (
		<div>
			<div className="last-content">
				<div>
					<span className="circle"></span>
					<span>{props.message}</span>
				</div>
				<div>
					<span>like</span>
				</div>
			</div>
		</div>
  );
}

export default Post;