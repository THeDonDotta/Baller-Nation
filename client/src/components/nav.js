import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/nav.css'
import {AppBar} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';

function Nav() {
    return (
        <div>
            <AppBar position= 'static' className='nav'>
                <Toolbar className= 'nav-links'>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/standings">Standings</Link>
                <Link to="/highlight">Player Spotlight</Link>
                <a href="https://www.ticketmaster.com/nba/?landing=c&awtrc=true&c=SEM_TMNBA_ggl_1571491344_129894278138_official%20nba%20tickets&GCID=0&gclid=CjwKCAiA-9uNBhBTEiwAN3IlNH4LkrISvcrutQtRALcIkV0I8GSWHo4LC1gkFxwa9frvT_v0r_dJWBoCR08QAvD_BwE&gclsrc=aw.ds">Tickets</a>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Nav
