import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from '../Components/admin/Sidebar/Sidebar';
import Header from '../Components/admin/Header/Header';
import Footer from '../Components/admin/Footer/Footer';

const AdminLayout = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar fixe */}
            <div className="w-1/15 bg-gray-100 h-full">
                <Sidebar />
            </div>

            {/* Partie droite : Header, Outlet (scrollable), Footer */}
            <div className="flex flex-col w-14/15 h-full">
                <Header />

                {/* Contenu principal scrollable */}
                <div className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default AdminLayout;
