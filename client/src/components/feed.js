import {useState, useEffect} from 'react';
import {getAllPosts, postPost} from '../services/post'
import React from 'react'
import PostCreate from './PostCreate';
import {Link} from 'react-router-dom'
import Post from '../screens/Post'
import HomeBanner from './homeBanner';
import { Card, Button } from '@mui/material'

function Feed({feedposts, comments, handlePostCreate, handlePostDelete}) {

    return (
        <div>
            <HomeBanner />
            <PostCreate
                handlePostCreate={handlePostCreate}
            />
            
            {feedposts?.map((post, index) => (

                <div>
                    <Post
                    post={post}
                    key={index}
                    />
                    <Link className='edit-button' to={`/posts/${post.id}`}>
                    <Button variant="contained">Checkout the Post</Button>
                    </Link>
                    <Button variant="contained"
                    onClick={() => handlePostDelete(post.id)}>
                    Delete
                    </Button>
                
                </div> 
                
            ))}


        </div>
    )
}

export default Feed
