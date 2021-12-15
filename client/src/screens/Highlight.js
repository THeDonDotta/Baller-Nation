import React from 'react'
import '../assets/highlight.css'

function Highlight() {
  return (
    <div>
      <h1 className="spotlight-title">Player spotlight</h1>
      <h1 className="player-name">Steph Curry</h1>
      <img className="highlight-player" src="https://i.imgur.com/TytreTO.png" title="source: imgur.com" />
      <img className="player-media" src="https://i.imgur.com/Z1ARloq.png" title="source: imgur.com" />
    </div>
  )
}

export default Highlight
