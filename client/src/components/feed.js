import {useState, useEffect} from 'react';
import {getAllPosts, postPost} from '../services/post'
import React from 'react'
import PostCreate from './PostCreate';

function Feed({feedposts, comments}) {

    return (
        <div>
            <PostCreate/>
            {feedposts?.map((post, index) => (
                <div>
                <p>{post.post}</p>
                
                </div>
                
                
            ))}
        </div>
    )
}

export default Feed
