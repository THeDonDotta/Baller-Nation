import {useState, useEffect} from 'react'
import {getAllPosts, postPost} from '../services/post'
import Feed from '../components/feed'

function MainContainer() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const postfeed = await getAllPosts();
          setPosts(postfeed);
        };
        fetchPosts();
      }, []);

    return (
        <div>
            <Feed 
            posts = {posts}
            />
        </div>
    )
}

export default MainContainer
