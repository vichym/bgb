import React from 'react';
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom';

function NotFoundPage(props) {
    return (
        <Layout color='rgba(237, 109, 109, 1)'>
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