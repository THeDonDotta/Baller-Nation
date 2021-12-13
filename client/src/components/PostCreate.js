import { useState } from 'react';
import {postPost} from '../services/post'
import { Redirect, useHistory } from 'react-router-dom'
import Post from '../screens/Post';

export default function PostCreate({handlePostCreate}) {
    
    const [post, setPost] = useState({
    post: "",
    image: "",
    });

    const [isCreated, setCreated] = useState(false)
    const history = useHistory()
    const handleChange = (e) => {
    const { name, value } = e.target;
        setPost((prevState) => ({
            ...prevState,
            [name]: value,
        }))

    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const created = await postPost(post);
        setCreated({ created });
    };
    if (isCreated) {
        return <Redirect to={`/home`} />;
    }

    return (
        <div>
            <h3>Create Post</h3>
        <form onSubmit={(e)=>{e.preventDefault(); handlePostCreate(post)}}>
            <label>Post:
                <textarea type='text' name='post' value={post.post} onChange={handleChange} />
            </label>
            <button>Submit</button>
        </form>
    </div>
    );
}