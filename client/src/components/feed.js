import {useState, useEffect} from 'react';
import {getAllPosts, postPost} from '../services/post'
import React from 'react'

function Feed({feedposts, comments}) {

    return (
        <div>
            
            {feedposts?.map((post, index) => (
                <div>
                <p>{post.post}</p>
                </div>
            ))}

            {/* {comments?.map((comment) => (
                <p>{comment.comment}</p>
            ))} */}
            
        </div>
    )
}

export default Feed
