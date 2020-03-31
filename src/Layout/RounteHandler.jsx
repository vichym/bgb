import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginPage from "../Components/LoginPage"
import NotFoundPage from "../Components/404";
import WelcomePage from '../Components/WelcomePage';
import JoinGamePage from '../Components/JoinGamePage';
import CreateGamePage from '../Components/CreateGamePage';

export const route = [ 
    { path: '/', exact: true, Component: LoginPage, name: "Login Page" },
    { path: '/welcome', Component: WelcomePage, name: "Welcome Page" },
    { path: '/joingame', Component: JoinGamePage, name: "Join Game Page" },
    { path: '/creategame', Component: CreateGamePage, name: "Create Game Page" },
    { path: "*", Component: NotFoundPage }

]

const RouteHandler = () => {
    return (
        <Fragment>
            <Switch>
                {route.map(page =>
                    <Route path={page.path}
                        exact={page.exact}
                        component={page.Component}>
                    </Route>
                )}
            </Switch>
        </Fragment>
    );
}

export default RouteHandler;
