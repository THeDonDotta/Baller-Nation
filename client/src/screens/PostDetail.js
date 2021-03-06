import {useState, useEffect} from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { getOnePost, deletePost } from '../services/post'
import { getAllComments, postComment } from '../services/comments'
import { Card, Button } from '@mui/material'
import '../assets/postDetail.css'

function PostDetail({handlePostDelete, handleCommentCreate}) {
    const [post, setPost] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const { id } = useParams();
    const [formData, setFormData] =useState({
        comment: '',
    })
    const {comment} = formData;
    const history = useHistory();

    useEffect(() => {
        const fetchPost = async () => {
        const currentPost = await getOnePost(id);
        console.log(post)
        setPost(post);
    };
        fetchPost();
    }, [id]);

    // const handleCommentCreate = async (formData) => {
    //     const newComment = await postComment(formData);
    //     setComments((prevState) => [...prevState, newComment]);
    //     history.push(`/posts/${post.id}`);
    // };

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
            
                <h1 className="detail-post" >{post.post}</h1>
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
            <h3 className="add-comment-title">Add a comment</h3>
                <label>
                    comment here
                <input type='textarea' name='comment' value= {comment} onChange={handleChange} />
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