import {useState, useEffect} from 'react';
import {getAllPosts, postPost} from '../services/post'
import React from 'react'
import PostCreate from './PostCreate';
import {Link} from 'react-router-dom'
import Post from '../screens/Post'


function Feed({feedposts, comments, handlePostCreate}) {

    return (
        <div>
            <PostCreate
                handlePostCreate={handlePostCreate}
            />
            {feedposts?.map((post, index) => (

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
