import React from 'react';
import Layout from './Layout'
import { Link } from 'react-router-dom';

function NotFoundPage(props) {
    return (
        <Layout color1='rgba(255, 0, 0, 0.938)' color2 = 'rgba(0, 0, 0, 0.938)'>
            <div >
                <h2 className="d-flex justify-content-center" style={{ fontSize: '3rem' }}>
                    Page Not Found
                </h2>
                <Link className="d-flex justify-content-center" to="/">Return to Homepage</Link>
            </div>
        </Layout>
    );
}

export default NotFoundPage;