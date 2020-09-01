import React from 'react';
import {Router,Route,Switch,Redirect} from 'react-router';
import { createHashHistory } from "history";
const history = createHashHistory();

class RouterConfig extends React.Component{
    render(){
        return(
            <Router history={history}>
                <Switch>
                    {/* <Route path='/Page1' component={Page1}/>
                    <Route path='/Page2' component={Page2}/> */}
                </Switch>
            </Router>
        )
    }
}
export default RouterConfig