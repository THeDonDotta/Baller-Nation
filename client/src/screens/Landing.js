import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'

function Landing() {
  return (
    <div>
      <h1>Baller Nation</h1>
      <Link to='/home'>
        <Button>enter</Button>
      </Link>
    </div>
  )
}

export default Landing
