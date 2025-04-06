import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from '../Components/admin/Sidebar/Sidebar';
import Header from '../Components/admin/Header/Header';
import Footer from '../Components/admin/Footer/Footer';

const AdminLayout = () => {
    return (
    <div className="flex">
        <div className="w-1/15">
            <Sidebar />
        </div>
        <div className='w-14/15'>
            <Header/>
            <div className='p-4'>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    </div>
    );
};

export default AdminLayout;