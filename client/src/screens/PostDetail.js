import {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getOnePost, addComment } from '../services/post'


function PostDetail(props) {
    const [post, setPost] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
        const post = await getOnePost(id);
        setPost(post);
    };
        fetchPost();
    }, [id]);



    
    return (
        <div>
            <div>
                <h1>hi</h1>
                <div>{post.post}</div>
                {/* <div>{post.comments.map((c)=> (
                    <h3>{c}</h3>
                ))}</div> */}
                    <Link className='edit-button' to={`/posts/${post._id}/edit`}>
                    Update Post
                    </Link>
                
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