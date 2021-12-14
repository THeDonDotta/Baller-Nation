import {useState, useEffect} from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getOnePost, addComment, deletePost } from '../services/post'
import { Card, Button } from '@mui/material'

function PostDetail({handlePostDelete}) {
    const [post, setPost] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [formData, setFormData] =useState({
        comment: '',
    })
    const {comment} = formData;
    const history = useHistory();

    console.log(post)
    console.log(post.comments)
    useEffect(() => {
        const fetchPost = async () => {
        const post = await getOnePost(id);
        setPost(post);
    };
        fetchPost();
    }, [id]);

    const handleCommentCreate = async (formData) => {
        const newComment = await addComment(formData);
        setComments((prevState) => [...prevState, newComment]);
        history.push(`/posts/${post.id}`);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
        ...prevState,
        [name]: value,
        }));
        };
    
    return (
        <div>
            <div>
            
                <div>{post.post}</div>
                <div>{post.comments?.map((c)=> (
                    <h3>{c.comment}</h3>
                ))}</div>

                <Link className='edit-button' to={`/posts/${post.id}/edit`}>
                    <Button variant="contained">
                    Update Post
                    </Button>
                </Link> 
            <form
                onSubmit={(e) => {
                e.preventDefault();
                handleCommentCreate(formData);
                }}
            >
            <h3>Add a comment</h3>
                <label>
                    comment here
                <input type='text' name='comment' value= {comment} onChange={handleChange} />
                </label>
                <button>Submit</button>
            </form>
            </div>
        </div>
    )
}



export default PostDetail

// {/* <h3>{post?.post}</h3>
// {post?.comments.map((c) => (
//     <p key={`list${c.id}`}>{c}</p>
// ))}

// <form onSubmit={handleSubmit}>

// <select onChange={handleChange} defaultValue='default'>
// {comments.map((c) => (

//     <option value={c.id} key={`select${c.id}`}>
//     {c.comment}
//     </option>
// ))}
// </select>
// <button>Add</button>
// </form> */}

// const handleChange = (e) => {
//     const { value } = e.target;
//     setCommentId(value);
// };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newComments = await addComment({ comment_id: commentId, post_id: id });
//     setPost((prevState) => ({ ...prevState, comments: newComments }));