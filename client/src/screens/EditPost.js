import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

function EditPost({posts, handlePostUpdate}) {

    const [formData, setFormData] = useState({
        post: '',
        image: '',
    });
    const { post } = FormData
    const { id } = useParams();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        }));
    };



    return (
        <div>
            <form
            onSubmit={(e) => {
            e.preventDefault();
            handlePostUpdate(id, formData);
            }}
            >
            <h3>Edit Post</h3>
            <label>
                Update post
                <input type='text' name='name' value={post} onChange={handleChange} />
            </label>
            <button>Submit</button>
        </form> 
        </div>
    )
}

export default EditPost
