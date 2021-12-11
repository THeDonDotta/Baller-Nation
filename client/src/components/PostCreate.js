import { useState } from 'react';

export default function PostCreate({ handlePostCreate }) {
    const [formData, setFormData] = useState({
    post: '',
    });
    const { post } = formData;

    const handleChange = (e) => {
    const { post, value } = e.target;
    setFormData((prevState) => ({
    ...prevState,
    [post]: value,
    }));
    };

    return (
    <form
        onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
        }}
    >
        <h3>Create Post</h3>
        <label>
        Post
        <input type='text' name='post' value={post} onChange={handleChange} />
        </label>
        <button>Submit</button>
    </form>
    );
}