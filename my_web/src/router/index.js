import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import App from '../App'
import Home from '../component/Home'
import Login from '../component/Login'
import Download from '../component/Download'
import List from '../component/List'
import Details from '../component/Details'

const router = (
    <HashRouter>
        <App>
            <Route path='/' component={Home} exact></Route>
            <Route path='/login' component={Login} exact></Route>
            <Route path='/download' component={Download} exact></Route>
            <Route path='/list' component={List} exact></Route>
            <Route path='/detail' component={Details} exact></Route>
        </App>
    </HashRouter>
)

export default router