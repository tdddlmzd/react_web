import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import App from '../App'
import Home from '../component/Home'
import Login from '../component/Login'
import Download from '../component/Download'

const router = (
    <HashRouter>
        <App>
            <Route path='/' component={Home} exact></Route>
            <Route path='/login' component={Login} exact></Route>
            <Route path='/download' component={Download} exact></Route>
        </App>
    </HashRouter>
)

export default router