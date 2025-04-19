import React, { useEffect, useRef, useState } from 'react';



const Header = () => {

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
        <div className='p-4 shadow-lg flex items-center justify-between pr-4'>
            <h2>
                <b>TITLE</b>
            </h2>
            <span onClick={toggleVisibility} className="inline-flex shrink-0 rounded-full border border-green-300 bg-green-100 dark:border-green-300/10 dark:bg-green-400/10 relative cursor-pointer p-1 mr-8">
                <svg className="size-6 stroke-green-500 dark:stroke-green-500">teste</svg>
                {isVisible && (
                <div
                    ref={dropdownRef}
                    className="absolute right-0 top-16 w-48 bg-white rounded-md shadow-lg z-10 transition-opacity duration-300 ease-in-out"
                >
                    <div className="flex items-center px-4 py-2">
                        <span>User Name</span>
                        <span className="ml-2 text-gray-500">
                            <svg className="size-6 stroke-green-500 dark:stroke-green-500">teste</svg>
                        </span>
                    </div>
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
                        <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
                    </ul>
                </div>
            )}
            </span>
        </div>
    );
};

export default Header;