import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/standings">Standings</Link>
                <Link to="/highlight">Highlights</Link>
                <Link to='tickets'>Tickets</Link>
            </nav>
        </div>
    )
}

export default Nav
