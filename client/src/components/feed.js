import {useState, useEffect} from 'react';
import {getAllPosts, postPost} from '../services/post'

import React from 'react'

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const postfeed = await getAllPosts();
          setPosts(postfeed);
        };
        fetchPosts();
      }, []);
console.log(posts)
    return (
        <div>
            <h1>hi</h1>
            {posts.map((post) => (
                <p>{post.post}</p>
            ))}
        </div>
    )
}

export default Feed
