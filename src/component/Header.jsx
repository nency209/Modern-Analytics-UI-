import React from 'react';

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row py-6 px-8 sm:px-2 justify-between md:items-center">
            <div className="font-normal text-xs font-['Plus_Jakarta_Display']">
                <p className="text-[#A0AEC0]">
                    Pages / <span className="text-white"> Dashboard</span>
                </p>
                <p className="text-sm">Dashboard</p>
            </div>
            <div className="flex sm:flex-row items-start sm:items-center gap-4 font-normal text-[#A0AEC0] sm:w-auto">
                <div className="flex items-center bg-[#0F1535] border border-[#A0AEC0] rounded-3xl overflow-hidden px-2 py-2 w-full sm:w-auto">
                    <i className="fa-solid fa-magnifying-glass mr-2"></i>
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="outline-none text-white bg-[#0F1535] placeholder-[#A0AEC0] w-full sm:w-auto"
                    />
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-user"></i>
                        <a href="#">Sign in</a>
                    </div>
                    <a href="#"><i className="fa-solid fa-gear"></i></a>
                    <a href="#"><i className="fa-solid fa-bell"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Header;