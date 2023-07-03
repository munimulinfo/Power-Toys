import React from 'react';
import Header from '../layouts/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/Footer';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Power Toys</title>
            </Helmet>
            <div className='my-container'>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;