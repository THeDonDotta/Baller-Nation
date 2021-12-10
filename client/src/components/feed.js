import {useState, useEffect} from 'react';
import {getAllPosts, postPost} from '../services/post'
import React from 'react'

function Feed({feedposts, comments}) {

    return (
        <div>
            <h1>hi</h1>
            {feedposts?.map((post) => (
                <p>{post.post}</p>
            ))}

            {comments?.map((comment) => (
                <p>{comment.comment}</p>
            ))}
            
        </div>
    )
}

export default Feed
