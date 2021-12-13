import {useState, useEffect} from 'react'
import { Switch, Route, useHistory} from 'react-router-dom'
import {getAllPosts, postPost, putPost, deletePost} from '../services/post'
import { getAllComments} from '../services/comments'
import Feed from '../components/feed'
import Layout from '../layout/Layout'
import PostDetail from '../screens/PostDetail'
import About from '../screens/About'
import PostCreate from '../components/PostCreate'
import Standings from '../screens/Standings'
import EditPost from '../screens/EditPost'



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
        history.push('/home');
    };
    const [post, setPost] = useState({
        post: '',
    });

    const handlePostUpdate = async (id, formData) => {
        const newPost = await putPost(id, formData);
        setPosts((prevState) =>
        prevState.map((post) => {
            return post.id === Number(id) ? newPost : post;
        })
        );
        history.push('/home');
    };
    
    const handlePostDelete = async (id) => {
        await deletePost(id);
        setPosts((prevState) => prevState.filter((post) => post.id !== id));
    };
    
    return (
        <div>
            
            <Switch>
                <Route exact path="/home">
                    <Feed 
                    feedposts = {posts}
                    comments = {comments}
                    handlePostCreate = {handlePostCreate}
                    />
                </Route>
                    <Route path='/posts/:id'>
                <PostDetail comments={comments}  />
                </Route>
                <Route exact path='/about'>
                    <About />
                </Route>
                <Route exact path="/posts/:id/edit">
                    <EditPost
                    posts = {posts}
                    handlePostUpdate = {handlePostUpdate}
                    />
                </Route>
                <Route exact path="/posts/:id">
                    <PostDetail  handlePostDelete = {handlePostDelete}/>
                </Route> 
                <Route exact path="/standings">
                    <Standings />
                </Route>
            </Switch>
        </div>
    )
}

export default MainContainer
