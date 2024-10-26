"use client"
import Link from 'next/link';
import { useState } from 'react';

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div
            className={`h-screen bg-gray-800 text-white fixed transition-all duration-300 ease-in-out ${isCollapsed ? 'w-16 h-[65px] rounded-full' : 'w-64'
                }`}
        >
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-gray-600 text-sm absolute top-4 right-4 rounded-md"
                aria-label="Toggle sidebar"
            >
                {isCollapsed ? '->' : '<-'}
            </button>

            {/* Sidebar Content */}
            <div className="flex flex-col items-start">
                {
                    isCollapsed ? "" : (
                        <>
                            <h2 className={`text-2xl font-bold p-4`}>
                                NagorikMovie
                            </h2>
                            <nav className="flex flex-col space-y-2 w-full">
                                <Link href="/" className="p-4 hover:bg-gray-700">
                                    Home
                                </Link>
                                <Link href="/pages/watchList" className="p-4 hover:bg-gray-700">
                                    Wishlist
                                </Link>
                            </nav>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default Sidebar;
