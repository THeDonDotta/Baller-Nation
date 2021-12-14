import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from '@mui/material'
import '../assets/post.css'

function Post({post}) {
    return (
        <div className="post">
            <Link to= {`/posts/${post.id}`}>
                <Card className="post-text">{post.post}</Card>
                
            </Link>
        </div>
    )
}

export default Post
