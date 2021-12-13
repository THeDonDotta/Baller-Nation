import { useState } from 'react';
import {postPost} from '../services/post'
import { Redirect } from 'react-router-dom'
import Post from '../screens/Post';

export default function PostCreate({ handlePostCreate }) {
    const [post, setPost] = useState({
    post: "",
    });


    const handleChange = (e) => {
    const { post, value } = e.target;
    setPost({ 
        ...Post,
        [post]: value,
    })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const created = await postPost(post);
        
    };
    function refresh() {
        window.location.reload(false);
    }

    return (
        <div>
            <h3>Create Post</h3>
        <form onSubmit={handleSubmit}>
            <label>Post:
                <textarea type='text' name='post' value={post.post} onChange={handleChange} />
            </label>
            <button onClick={refresh}>Submit</button>
        </form>
    </div>
    );
}