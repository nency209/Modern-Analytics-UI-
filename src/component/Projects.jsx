import React from 'react';

const Projects = () => {
  return (
    <div className="rounded-3xl bg-gradient-to-l from-[#060B28BD] to-[#0A0E23B5]">
      <div className="my-6 mx-4 lg:mx-8 space-y-1">
        <p className="font-bold text-lg font-['Plus_Jakarta_Display']">Projects</p>
        <div className="flex items-center gap-1 font-['Plus_Jakarta_Display']">
          <i className="fa-solid fa-check w-3 h-3 rounded-2xl bg-green-500 text-xs text-black text-center"></i>
          <p className="text-sm font-semibold text-[#A0AEC0]">30 done this month</p>
        </div>
      </div>
      <div className="mx-4">
        <div className="w-full flex justify-evenly text-xs text-[#A0AEC0]">
          <p className="flex-[2]">COMPANIES</p>
          <p className="flex-1 text-center">MEMBER</p>
          <p className="flex-1 text-center">BUDGET</p>
          <p className="flex-1 text-center">COMPLETION</p>
        </div>
        <div className="w-full border-b mt-4 border-[#56577A]"></div>
        <div className="space-y-2 mt-2 overflow-x-auto">
          {/* Project Items */}
          <div className="p-2 border-b border-[#56577A] flex">
            <div className="flex-[2] flex gap-2">
              <div className="w-5 h-5 bg-[url('../public/Icon.png')] bg-cover"></div>
              <p className="text-sm font-normal">Chakra Soft UI Version</p>
            </div>
            <div className="flex-1">
              <div className="flex">
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-50 relative"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-40 relative -ml-2"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-30 relative -ml-2"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-20 relative -ml-2"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-10 relative -ml-2"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">$14,000</p>
            </div>
            <div className="flex-1 flex">
              <p className="text-sm font-bold">60%</p>
            </div>
          </div>
           <div className="p-2 border-b border-[#56577A] flex">
            <div className="flex-[2] flex gap-2">
              <div className="w-5 h-5 bg-[url('../public/Icon1.png')] bg-cover"></div>
              <p className="text-sm font-normal">Add Progress Track</p>
            </div>
            <div className="flex-1">
              <div className="flex">
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-50 relative"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-40 relative -ml-2"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">$3,000</p>
            </div>
            <div className="flex-1 flex">
              <p className="text-sm font-bold">10%</p>
            </div>
          </div>
          <div className="p-2 border-b border-[#56577A] flex">
            <div className="flex-[2] flex gap-2">
              <div className="w-5 h-5 bg-[url('../public/Group.png')] bg-cover"></div>
              <p className="text-sm font-normal">Fix Platform Errors</p>
            </div>
            <div className="flex-1">
              <div className="flex">
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-50 relative"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-40 relative -ml-2"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-30 relative -ml-2"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">Not set</p>
            </div>
            <div className="flex-1 flex">
              <p className="text-sm font-bold">100%</p>
            </div>
          </div>
          <div className="p-2 border-b border-[#56577A] flex">
            <div className="flex-[2] flex gap-2">
              <div className="w-5 h-5 bg-[url('../public/Vector.png')] bg-cover"></div>
              <p className="text-sm font-normal">Launch our Mobile App</p>
            </div>
            <div className="flex-1">
              <div className="flex">
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-50 relative"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-40 relative -ml-2"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-30 relative -ml-2"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-20 relative -ml-2"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-10 relative -ml-2"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">$32,000</p>
            </div>
            <div className="flex-1 flex">
              <p className="text-sm font-bold">100%</p>
            </div>
          </div>
          <div className="p-2 border-b border-[#56577A] flex">
            <div className="flex-[2] flex gap-2">
              <div className="w-5 h-5 bg-[url('../public/Vector1.png')] bg-cover"></div>
              <p className="text-sm font-normal">Add the New Pricing Page</p>
            </div>
            <div className="flex-1">
              <div className="flex">
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-50 relative"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-40 relative -ml-2"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-30 relative -ml-2"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-20 relative -ml-2"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">$400</p>
            </div>
            <div className="flex-1 flex">
              <p className="text-sm font-bold">25%</p>
            </div>
          </div>
          <div className="p-2 flex">
            <div className="flex-[2] flex gap-2">
              <div className="w-5 h-5 bg-[url('../public/Icon2.png')] bg-cover"></div>
              <p className="text-sm font-normal">Redesign New Online Shop</p>
            </div>
            <div className="flex-1">
              <div className="flex">
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-50 relative"></div>
                <div className="w-5 h-5 rounded-full bg-[url('../public/image.png')] bg-cover border-2 border-black z-40 relative -ml-2"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">$7,600</p>
            </div>
            <div className="flex-1 flex">
              <p className="text-sm font-bold">40%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;