import { useState } from 'react';
import {postPost} from '../services/post'
import { Redirect, useHistory } from 'react-router-dom'
import Post from '../screens/Post';
import TextField from '@mui/material/TextField'
import { Card, Button } from '@mui/material'
import '../assets/postCreate.css'

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
            <h3>Take your shot below: </h3>
        <form onSubmit={(e)=>{e.preventDefault(); handlePostCreate(post)}}>
            <label className='post-textarea'>
                <textarea type='text' name='post' rows='6' cols='30'value={post.post} onChange={handleChange} />
            </label>
            <button className='submit-post'><Button>Submit</Button></button>
        </form>
    </div>
    );
}