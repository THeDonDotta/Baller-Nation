import React from 'react'
import '../assets/standing.css'
function Standings() {
    return (
        <div>
            <h1 className="standings-title">Current Standings</h1>
            <img className="eastern" src="https://i.imgur.com/QNgHxlr.png" title="source: imgur.com" />
            <img className="western" src="https://i.imgur.com/AfiNiBB.png" title="source: imgur.com" />
            <div>
                <img className="eastern-media" src="https://i.imgur.com/KaLUaCj.png" title="source: imgur.com" />
                <img className="western-media" src="https://i.imgur.com/X41Pznr.png" title="source: imgur.com" />
            </div>
        </div>
    )
}

export default Standings
