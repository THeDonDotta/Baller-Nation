import React from 'react'
import { useParams } from 'react-router-dom'
import { getOnePost, addComment } from '../services/post'


function PostDetail({comments}) {
    const [post, setPost] = useState(null);
    const [commentId, setCommentId] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
        const postItem = await getOnePost(id);
        setPost(postItem);
    };
        fetchPost();
    }, [id]);

    const handleChange = (e) => {
        const { value } = e.target;
        setCommentId(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newComments = await addComment({ comment_id: commentId, post_id: id });
        setPost((prevState) => ({ ...prevState, comments: newComments }));
    };

    
    return (
        <div>
            <h3>{post?.post}</h3>
            {post?.comments.map((c) => (
                <p key={`list${c.id}`}>{c}</p>
            ))}

    <form onSubmit={handleSubmit}>

        <select onChange={handleChange} defaultValue='default'>

            <option disabled value='default'>
            -- Select a comment --
            </option>

            {comments.map((c) => (
            
                <option value={c.id} key={`select${c.id}`}>
                {c.comment}
                </option>
            ))}
        </select>
        <button>Add</button>
    </form>
</div>
    )
}



export default PostDetail
