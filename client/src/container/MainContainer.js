import {useState, useEffect} from 'react'
import {getAllPosts, postPost} from '../services/post'
import { getAllComments} from '../services/comments'
import Feed from '../components/feed'

function MainContainer() {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])


    useEffect(() => {
        const fetchPosts = async () => {
          const postfeed = await getAllPosts();
          setPosts(postfeed);
        };
        fetchPosts();
      }, []);

      useEffect(() => {
        const fetchComments = async () => {
          const postcomment = await getAllComments();
          setComments(postcomment);
        };
        fetchComments();
      }, []);

    return (
        <div>
            <Feed 
            feedposts = {posts}
            comments = {comments}
            />
        </div>
    )
}

export default MainContainer
