import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap'
import Header from '../Components/Header'
import { Route, Switch } from 'react-router-dom'
import route from '../route'

function Layout() {

    return (
        <Fragment>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Switch>
                            {route.map(page =>
                            <Route path={page.path}
                            exact={page.exact}
                            component={page.Component}>
                            </Route>
                        )}
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    );

}

export default Layout;
