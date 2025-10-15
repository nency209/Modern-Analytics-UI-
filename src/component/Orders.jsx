import React from 'react';

const Orders = () => {
  return (
    <div className="rounded-3xl bg-gradient-to-l from-[#060B28BD] to-[#0A0E23B5]">
      <div className="mt-2 mx-4 lg:mx-10 space-y-1">
        <p className="font-bold text-lg font-['Plus_Jakarta_Display']">Orders overview</p>
        <div className="flex items-center gap-1 font-['Plus_Jakarta_Display']">
          <i className="fa-solid fa-check w-3 h-3 rounded-2xl bg-green-500 text-xs text-black text-center"></i>
          <p className="text-sm font-semibold text-[#A0AEC0]">+30% done this month</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4 mx-4 lg:mx-8 pb-4">
        {/* Order Items */}
        <div className="flex gap-4">
          <i className="fa-solid fa-bell w-4 pt-1 h-4 text-[#0075FF]"></i>
          <div>
            <p className="font-['Plus_Jakarta_Display'] text-sm font-normal">New order #4219423</p>
            <p className="font-['Plus_Jakarta_Display'] text-xs font-normal text-[#A0AEC0]">21 DEC 11:21 PM</p>
          </div>
        </div>
        <div className="flex gap-4">
          <i className="fa-brands fa-html5 w-4 pt-1 h-4" style={{ color: '#e31a1a' }}></i>
          <div>
            <p className="font-['Plus_Jakarta_Display'] text-sm font-normal">Server Payments for April</p>
            <p className="font-['Plus_Jakarta_Display'] text-xs font-normal text-[#A0AEC0]">21 DEC 9:28 PM</p>
          </div>
        </div>
        <div className="flex gap-4">
          <i className="fa-solid fa-cart-shopping w-4 pt-1 h-4 text-[#0075FF]"></i>
          <div>
            <p className="font-['Plus_Jakarta_Display'] text-sm font-normal">New card added for order #3210145</p>
            <p className="font-['Plus_Jakarta_Display'] text-xs font-normal text-[#A0AEC0]">20 DEC 3:52 PM</p>
          </div>
        </div>
        <div className="flex gap-4">
          <i className="fa-solid fa-floppy-disk w-4 pt-1 h-4 text-[#0075FF]" style={{ color: '#ffd43b' }}></i>
          <div>
            <p className="font-['Plus_Jakarta_Display'] text-sm font-normal">Unlock packages for Development</p>
            <p className="font-['Plus_Jakarta_Display'] text-xs font-normal text-[#A0AEC0]">19 DEC 11:35 PM</p>
          </div>
        </div>
        <div className="flex gap-4">
          <i className="fa-solid fa-bell w-4 pt-1 h-4 text-[#0075FF]"></i>
          <div>
            <p className="font-['Plus_Jakarta_Display'] text-sm font-normal">New order #4219423</p>
            <p className="font-['Plus_Jakarta_Display'] text-xs font-normal text-[#A0AEC0]">18 DEC 4:41 PM</p>
          </div>
        </div>
        <div className="flex gap-4">
          <p className="w-4 pt-1 h-4 bg-[url('../public/Icon.png')] bg-cover"></p>
          <div>
            <p className="font-['Plus_Jakarta_Display'] text-sm font-normal">$2400, Design changes</p>
            <p className="font-['Plus_Jakarta_Display'] text-xs font-normal text-[#A0AEC0]">22 DEC 7:20 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;