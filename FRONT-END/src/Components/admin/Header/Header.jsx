import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MdAdminPanelSettings } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdSettings } from "react-icons/io";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { FaUser, FaHome, FaTools, FaCalendarAlt, FaCog, FaBell, FaSolarPanel, FaDatabase  } from "react-icons/fa";
import { getUserFromToken } from '../../../utils/auth';
const Header = () => {

    const location = useLocation();
    const routeData = {
        "/dashboard": { title: "Tableau de bord", icon: <FaHome /> },
        "/site": { title: "Sites", icon: <FaSolarPanel /> },
        "/maintenance-planning": { title: "Planning de maintenance", icon: <FaTools /> },
        "/calendar": { title: "Calendrier", icon: <FaCalendarAlt /> },
        "/settings": { title: "Paramètres", icon: <FaCog /> },
        "/database-administration": { title: "Base de données", icon: <FaDatabase  /> },
        "/notification": { title: "Notifications", icon: <FaBell /> },
    };
    const currentRoute = Object.entries(routeData).find(([path]) => location.pathname.startsWith(path))?.[1]
        || { title: "Page", icon: null };

    const user = getUserFromToken();

    const [isVisible, setIsVisible] = useState(false);
    const dropdownRef = useRef(null);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible]);

    return (
        <div className='p-3 shadow-md flex items-center justify-between'>
            <div className="text-md text-uppercase font-bold font-sans text-korobo flex items-center justify-center gap-2">
                {currentRoute.icon}
                <span>{currentRoute.title}</span>
            </div>
            <span onClick={toggleVisibility} className="inline-flex text-korobo shrink-0 rounded-full border border-green-300 bg-green-100 dark:border-green-300/10 dark:bg-green-400/10 relative cursor-pointer p-2 mr-2">
                <FaUser />
                {isVisible && (
                    <div
                        ref={dropdownRef}
                        className="absolute px-1 right-0 top-16 w-48 bg-white rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out pb-3"
                    >
                        <div className="flex gap-1 items-center px-4 py-2 text-korobo text-md">
                            <MdAdminPanelSettings />
                            <b className=''>{user.nom}</b>
                        </div>
                        <hr className=' m-auto text-gray-100' />
                        <ul className='text-gray-700 text-sm '>
                            <li className="px-4 py-2 hover:bg-gray-100 flex gap-2 items-center"><CgProfile /> Profil</li>
                            <li className="px-4 py-2 hover:bg-gray-100 flex gap-2 items-center"><IoMdSettings /> Paramètres</li>
                            <li className="px-4 py-2 hover:bg-gray-100 flex gap-2 items-center"><RiLogoutCircleRFill />Déconnexion</li>
                        </ul>
                    </div>
                )}
            </span>
        </div>
    );
};

export default Header;