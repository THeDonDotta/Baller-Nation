import {useState, useEffect} from 'react';
import {getAllPosts, postPost} from '../services/post'
import React from 'react'
import PostCreate from './PostCreate';
import {Link} from 'react-router-dom'
import Post from '../screens/Post'


function Feed({feedposts, comments}) {

    return (
        <div>
            <PostCreate/>
            {feedposts?.map((post, index) => (
                // <div key={post.id}>
                // // <Link to={`posts/:${post.id}`}>
                // // <p>{post.post}</p>
                // // </Link>

                // </div>  
                <div>
                    <Post
                    post={post}
                    key={index}
                    />
                </div>            
            ))}

        </div>
    )
}

export default Feed
