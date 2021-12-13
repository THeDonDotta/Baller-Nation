import React from 'react'
import { Link } from 'react-router-dom'


function Post({post}) {
    return (
        <div>
            <Link to= {`/posts/${post.id}`}>
                <div className="post-text">{post.post}</div>
                
            </Link>
        </div>
    )
}

export default Post
