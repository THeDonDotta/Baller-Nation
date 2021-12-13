import React from 'react'
import Nav from '../components/nav'
function Layout(props) {
    return (
        <div>
            <Nav />
            {props.children}
        </div>
    )
}

export default Layout
