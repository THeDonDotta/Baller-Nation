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
                <a href="https://www.ticketmaster.com/nba/?landing=c&awtrc=true&c=SEM_TMNBA_ggl_1571491344_129894278138_official%20nba%20tickets&GCID=0&gclid=CjwKCAiA-9uNBhBTEiwAN3IlNH4LkrISvcrutQtRALcIkV0I8GSWHo4LC1gkFxwa9frvT_v0r_dJWBoCR08QAvD_BwE&gclsrc=aw.ds">Tickets</a>
            </nav>
        </div>
    )
}

export default Nav
