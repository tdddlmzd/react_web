import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import App from '../App'
import Home from '../component/Home'

const router = (
    <HashRouter>
        <App>
            <Route path='/' component={Home}></Route>
        </App>
    </HashRouter>
)

export default router