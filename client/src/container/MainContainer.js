import {useState, useEffect} from 'react'
import { Switch, Route, useHistory} from 'react-router-dom'
import {getAllPosts, postPost} from '../services/post'
import { getAllComments} from '../services/comments'
import Feed from '../components/feed'
import Layout from '../layout/Layout'
import PostDetail from '../screens/PostDetail'

function MainContainer() {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const history = useHistory();

    useEffect(() => {
        const fetchPosts = async () => {
            const postfeed = await getAllPosts();
            setPosts(postfeed);
        };
        fetchPosts();
    }, [] );
    console.log(posts)

    useEffect(() => {
        const fetchComments = async () => {
            const postcomment = await getAllComments();
            setComments(postcomment);
        };
        fetchComments();
    }, []);

    const handlePostCreate = async (formData) => {
        const newPost = await postPost(formData);
        setPosts((prevState) => [...prevState, newPost]);
        history.push('/posts');
    };
    
    return (
        <div>
            <Layout/>
            <Switch>
                <Route path="/home">
                    <Feed 
                    feedposts = {posts}
                    comments = {comments}
                    />
                </Route>
                    <Route path='/posts/:id'>
                <PostDetail comments={comments}  />
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer
