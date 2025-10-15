import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
          &#9776;
        </button>
      </div>

      <aside
        id="sidebar"
        className={`w-full ${
          isOpen ? 'block' : 'hidden'
        } flex-col min-h-screen py-4 sm:fixed sm:top-0 sm:left-0 sm:h-screen sm:w-full md:relative md:flex md:h-auto`}
      >
        <div className="md:hidden flex justify-end px-2">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-xl"
          >
            &times;
          </button>
        </div>

        <h2 className="uppercase text-sm font-normal text-center py-4 bg-gradient-to-r from-white to-[#757A8C00] text-transparent bg-clip-text">
          Vision UI Free
        </h2>

        <p className="w-60 h-px bg-gradient-to-r from-transparent via-[#E0E1E2] to-transparent mx-auto"></p>
        <div className="font-semibold text-sm m-6 sm:m-0">
          <div className="flex hover:bg-[#1A1F37] h-14 py-2 ml-8 px-8 rounded-xl items-center gap-2">
            <i className="fa-solid fa-house rounded-xl bg-[#1A1F37] p-2 hover:bg-[#0075FF] hover:text-white text-[#0075FF]"></i>
            <a href="#" className="font-['Plus_Jakarta_Display'] font-normal text-sm text-white">Dashboard</a>
          </div>
          <div className="flex hover:bg-[#1A1F37] h-14 py-2 ml-8 px-8 rounded-xl items-center gap-2">
            <i className="fa-solid fa-signal rounded-xl bg-[#1A1F37] p-2 hover:bg-[#0075FF] hover:text-white text-[#0075FF]"></i>
            <a href="#" className="font-['Plus_Jakarta_Display'] font-normal text-sm text-white">Tables</a>
          </div>
           <div className="flex hover:bg-[#1A1F37] h-14 py-2 ml-8 px-8 rounded-xl items-center gap-2">
            <i className="fa-solid fa-radio rounded-xl bg-[#1A1F37] p-2 hover:bg-[#0075FF] hover:text-white text-[#0075FF]"></i>
            <a href="#" className="font-['Plus_Jakarta_Display'] font-normal text-sm text-white">Billing</a>
          </div>
           <div className="flex hover:bg-[#1A1F37] h-14 py-2 ml-8 px-8 rounded-xl items-center gap-2">
            <i className="fa-solid fa-globe rounded-xl bg-[#1A1F37] p-2 hover:bg-[#0075FF] hover:text-white text-[#0075FF]"></i>
            <a href="#" className="font-['Plus_Jakarta_Display'] font-normal text-sm text-white">RTL</a>
          </div>
          <p className="font-['Plus_Jakarta_Display'] font-normal text-xs text-white py-2 px-16 uppercase">Account Page</p>
           <div className="flex hover:bg-[#1A1F37] h-14 py-2 ml-8 px-8 rounded-xl items-center gap-2">
            <i className="fa-solid fa-user rounded-xl bg-[#1A1F37] p-2 hover:bg-[#0075FF] hover:text-white text-[#0075FF]"></i>
            <a href="#" className="font-['Plus_Jakarta_Display'] font-normal text-sm text-white">Profile</a>
          </div>
           <div className="flex hover:bg-[#1A1F37] h-14 py-2 ml-8 px-8 rounded-xl items-center gap-2">
            <i className="fa-solid fa-file rounded-xl bg-[#1A1F37] p-2 hover:bg-[#0075FF] hover:text-white text-[#0075FF]"></i>
            <a href="#" className="font-['Plus_Jakarta_Display'] font-normal text-sm text-white">Sign In</a>
          </div>
           <div className="flex hover:bg-[#1A1F37] h-14 py-2 ml-8 px-8 rounded-xl items-center gap-2">
            <i className="fa-solid fa-rocket rounded-xl bg-[#1A1F37] p-2 hover:bg-[#0075FF] hover:text-white text-[#0075FF]"></i>
            <a href="#" className="font-['Plus_Jakarta_Display'] font-normal text-sm text-white">Sign Up</a>
          </div>
        </div>

        <div className="bg-[url('../public/sidebar.png')] bg-cover bg-center w-full md:w-[218px] h-[170px] rounded-xl mx-4 mt-8 md:mt-20 relative">
          <div className="absolute top-16 left-4 right-4 text-white text-sm space-y-1">
            <p className="font-['Plus_Jakarta_Display'] font-bold text-sm text-white">
              Need help?
              <br />
              <span className="font-['Plus_Jakarta_Display'] font-normal text-xs text-white">
                Please check our docs
              </span>
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button className="rounded-lg px-4 py-1 text-white text-xs md:text-sm bg-gradient-to-l from-[#060B28BD] to-[#0A0E23B5]">
              <strong>DOCUMENTATION</strong>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;