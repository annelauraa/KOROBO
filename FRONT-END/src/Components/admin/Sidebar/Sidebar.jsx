import React from 'react';
import './Sidebar.css';
import { Link, useNavigate } from 'react-router-dom';

import { RiDashboard3Fill, RiLogoutCircleRFill  } from "react-icons/ri";
import { PiSolarPanelFill } from "react-icons/pi";
import { BsDatabaseFillGear } from "react-icons/bs";
import { TbCalendarCog } from "react-icons/tb";
import { FaCogs } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaRegCalendarDays } from "react-icons/fa6";
const Sidebar = () => {
    const navigate     = useNavigate();
    const handleLogout = () => {
        navigate("/logout");
    }

    return (
        <div className='admin-sidebar flex flex-col items-center justify-between'>
           <div className='admin-title p-4 text-white'>
            <h1> <b>#Admin</b></h1>
           </div>
           <nav>
            <ul className='flex flex-col gap-4 justify-center items-center '>
                <li> <Link to="/dashboard"><RiDashboard3Fill className='sidebar-icon' title='Tableau de bord'/></Link></li>
                <li> <Link to="/site"><PiSolarPanelFill className='sidebar-icon' title='Sites'/></Link></li>
                <li><Link to="/maintenance-planning"><TbCalendarCog className='sidebar-icon' title='Planning de Maintenance'/></Link></li>
                <li><Link to="/calendar"><FaRegCalendarDays className='sidebar-icon' title='Calendier'/></Link></li>
                <li><Link to="/notification"><IoNotifications className='sidebar-icon' title='Notification'/></Link></li>
                <li><Link to="/database-administration"><BsDatabaseFillGear className='sidebar-icon' title='Base de donnée'/></Link></li>
                <li><Link to="/settings"><FaCogs className='sidebar-icon' title='Paramètre'/></Link></li>
            </ul>
           </nav>
           
           <div className='logoutButton flex flex-col items-center mb-5'>
                <hr className='mt-2 mb-5 w-20 text-gray-300' />
                <button onClick={handleLogout} >
                <RiLogoutCircleRFill className='sidebar-icon' title='Déconnexion'/>
                </button>
           </div>
        </div>
    );
};

export default Sidebar;