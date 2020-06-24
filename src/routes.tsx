import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from './pages/Login';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
            </Switch>
        </Router>
    );
}

export default Routes;