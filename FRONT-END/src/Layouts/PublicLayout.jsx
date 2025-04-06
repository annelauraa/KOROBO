import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Components/public/Navbar/Navbar';
import Footer from '../Components/public/Footer/Footer';

const PublicLayout = () => {
    return (
    <div className=''>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
    );
};

export default PublicLayout;