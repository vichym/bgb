import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import Chatrooms from "../Components/Chatrooms"
import LoginPage from "../Components/LoginPage"
import  NotFoundPage from "../Components/404";
const route = [
    { path: '/', exact: true, Component: LoginPage, name: "Login Page" },
    { path: '/gamerooms', Component: Chatrooms, name: "Game Room" },
    { path:"*", Component:  NotFoundPage  }
    
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
