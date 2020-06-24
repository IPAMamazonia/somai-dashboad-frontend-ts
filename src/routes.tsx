import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import Login from 'pages/Login';
import Register from 'pages/Register';
import Dashboard from 'pages/Dashboard';
import MyAlerts from 'pages/Dashboard/MyAlerts';
import UserList from 'pages/Dashboard/UserList';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Dashboard>
                    <Route exact component={(history: RouteComponentProps) => {
                        const { pathname } = history.location;
                        return (
                            <>
                                {pathname === "/dashboard" && <Redirect to="/dashboard/meus-alertas" />}
                                <Route path="/dashboard/meus-alertas" component={MyAlerts} />
                                <Route path="/dashboard/compartilhandos-comigo" component={MyAlerts} />
                                <Route path="/dashboard/lista-de-usuarios" component={UserList} />
                            </>
                        )
                    }

                    } />
                </Dashboard>
            </Switch>
        </Router>
    );
}

export default Routes;