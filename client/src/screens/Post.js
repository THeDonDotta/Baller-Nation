import React from 'react'
import { Link, useParams } from 'react-router-dom'


function Post({post, key}) {
    return (
        <div>
            <Link to= {`/posts/${post.id}`}>
                <div className="post-text">{post.post}</div>
                
            </Link>
        </div>
    )
}

export default Post
