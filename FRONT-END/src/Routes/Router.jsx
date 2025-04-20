import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import PublicLayout from '../Layouts/PublicLayout';
import AdminLayout from '../Layouts/AdminLayout';

// Pages Publiques
import Home from '../Pages/public/Home/Home';
import About from '../Pages/public/About/About';
import Contact from '../Pages/public/Contact/Contact';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/Sign-Up/SignUp';
import ForgotPassword from '../Pages/Login/ForgotPassword';


// Pages Admin
import Dashboard from "../Pages/admin/Dashboard/Dashboard";
import MaintPlanning from "../Pages/admin/Maintenance-Planning/MaintPlanning";
import Calendar from "../Pages/admin/Calendar/Calendar";
import DBAdmin from "../Pages/admin/Database-Administration/DBAdmin";
import Settings from "../Pages/admin/Settings/Settings";
import Notification from "../Pages/admin/Notification/Notification";
import Site from "../Pages/admin/Site/Site";

import ProtectedRoute from "../Routes/ProtectedRoute";
import AlreadyLoggedIn from "../Pages/Login/AlreadyLoggedIn";
import Logout from '../Pages/Login/Logout';

const AppRoutes = () => {
    return (
        <Routes>
        
        {/* Public layout */}
        <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
         </Route>

         {/* Admin layout */}
        <Route element={<AdminLayout />}>
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/maintenance-planning" element={<ProtectedRoute><MaintPlanning /></ProtectedRoute>} />
            <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
            <Route path="/database-administration" element={<ProtectedRoute><DBAdmin /></ProtectedRoute>} />
            <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
            <Route path="/notification" element={<ProtectedRoute><Notification /></ProtectedRoute>} />
            <Route path="/site" element={<ProtectedRoute><Site /></ProtectedRoute>} />
        </Route>
        {/* Login and sign-Up layout */}        
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/already-logged-in" element={<AlreadyLoggedIn />} />
        <Route path="/logout" element={<Logout />} />
    </Routes>
    );
};

export default AppRoutes;