import React from 'react';
import './myPost.css';
import Post from './post/post.jsx';

let MyPost = (props) => {
    let postElement = props.posts.map(messages => <Post message={messages.message} key={messages.id} likeCount={messages.likeCount}/>)

    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div>
                <div className="post-header">My posts</div>
                <div className="area">
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Send</button>
                    </div>
                </div>
            </div>
            {postElement}
        </div>
    );
}

export default MyPost;