import React from 'react'
import Layout from '../layout/Layout'
import MainContainer from '../container/MainContainer'
import Feed from '../components/feed'
import {Switch, Route} from 'react-router-dom'

function Home() {
    return (
        <div>
                <Route path="/home">
                <MainContainer />
                </Route>
        </div>
    )
}

export default Home
