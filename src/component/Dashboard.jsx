import React from "react";
import Header from "./Header";
import SalesChart from "./SalesChart";
import BarChart from "./BarChart";
import CircleChart from "./CircleChart";
import CircleChart2 from "./CircleChart2";
import Projects from "./Projects";
import Orders from "./Orders";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <main
      id="mainContent"
      className="text-white overflow-y-auto w-full px-4 md:px-6 py-4 sm:cols-span-1 h-screen"
    >
      <div className="w-full">
        <Header />

        <div className="grid gap-4 font-['Plus_Jakarta_Display'] items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Cards */}
          <div className="bg-gradient-to-r from-[#060B26BD] to-[#1A1F3780]  w-full h-auto p-4 rounded-3xl flex items-center justify-between px-4 text-md">
            <div className="space-y-1">
              <p className="text-xs font-normal text-[#A0AEC0]">
                Today’s Money
              </p>
              <div className="flex items-center gap-2 font-bold">
                <p className="text-lg">$35,000</p>
                <p className="text-[#01B574] text-sm">+55%</p>
              </div>
            </div>

            <div className="w-12 h-12 bg-[#0075FF] rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-radio text-white text-lg"></i>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#060B26BD] to-[#1A1F3780]  w-full h-auto p-4 rounded-3xl flex items-center justify-between px-4 text-md">
            <div className="space-y-1">
              <p className="text-xs font-normal text-[var(--textcolor)]">
                Today’s Users
              </p>
              <div className="flex items-center gap-2 font-bold">
                <p className="text-lg">2,300</p>
                <p className="text-[var(--greencolor)] text-sm">+5%</p>
              </div>
            </div>
            <div className="w-12 h-12 bg-[#0075FF] rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-globe text-white text-lg"></i>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#060B26BD] to-[#1A1F3780]  w-full h-auto p-4 rounded-3xl flex items-center justify-between px-4 text-md overflow-hidden">
            <div className="space-y-1">
              <p className="text-xs font-normal text-[var(--textcolor)]">
                Today’s Clients
              </p>
              <div className="flex items-center gap-2 font-bold">
                <p className="text-lg">+3,052</p>
                <p className="text-[#E31A1A] text-sm">-14%</p>
              </div>
            </div>
            <div className="w-12 h-12 bg-[#0075FF] rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-file text-white text-lg"></i>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#060B26BD] to-[#1A1F3780]  w-full h-auto p-4 rounded-3xl flex items-center justify-between px-4 text-md overflow-hidden">
            <div className="space-y-1">
              <p className="text-xs font-normal text-[var(--textcolor)]">
                Today’s Sales
              </p>
              <div className="flex items-center gap-2 font-bold">
                <p className="text-lg">$173,000</p>
                <p className="text-[var(--greencolor)] text-sm">+8%</p>
              </div>
            </div>
            <div className="w-12 h-12 bg-[#0075FF] rounded-lg flex items-center justify-center">
              <i className="fa-solid fa-cart-shopping text-white text-lg"></i>
            </div>
          </div>
        </div>

        <div className="grid w-full gap-3 grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1.3fr] mt-4">
          <div className="relative bg-[url('../public/card1.png')] bg-cover bg-center rounded-3xl h-[344px] text-white p-6">
            <p>Welcome Back</p>
            <p className="font-bold text-3xl font-['Plus_Jakarta_Display']">
              Mark Johnson
            </p>
            <p className="text-[#A0AEC0] font-['Plus_Jakarta_Display'] text-base mt-2">
              Glad to see you again!
              <br />
              Ask me anything
            </p>
            <div className="absolute bottom-6 left-6 flex gap-2">
              <a href="#" className="font-normal text-white text-xs">
                Tap to record
              </a>
              <i className="fa-solid fa-arrow-right text-sm text-white"></i>
            </div>
          </div>

          <div className="relative w-full flex flex-col items-center rounded-3xl bg-gradient-to-b from-[#060B28F0] to-[#0A0E237D] p-6 sm:p-4 font-['Plus_Jakarta_Display']">
            <div className="w-full mb-4 text-center sm:text-left">
              <p className="font-bold text-lg sm:text-base">
                Satisfaction Rate
              </p>
              <p className="text-[#A0AEC0] text-sm sm:text-xs">
                From all projects
              </p>
            </div>
            <CircleChart />
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-[#060B28BD] to-[#0E153AB5] text-white font-['Plus_Jakarta_Display'] flex flex-col justify-between">
            <div className="flex justify-between items-start px-4 pt-4 md:px-6">
              <p className="font-bold text-lg">Referral Tracking</p>
              <i className="fa-solid fa-ellipsis-h w-9 h-9 flex items-center justify-center pt-1 rounded-xl bg-black/30 text-[#7551FF]"></i>
            </div>
            <div className="flex flex-col lg:flex-row justify-between px-4 md:px-6 pb-20">
              <div className="flex flex-col gap-4 mb-8 lg:mb-0 w-full">
                <div className="rounded-3xl w-full bg-gradient-to-b from-[#060B28BD] to-[#0A0E23B5] py-3 px-6">
                  <p className="text-[#A0AEC0] text-sm">Invited</p>
                  <p className="font-bold text-lg">145 People</p>
                </div>
                <div className="rounded-3xl w-full bg-gradient-to-b from-[#060B28BD] to-[#0A0E23B5] py-3 px-6">
                  <p className="text-[#A0AEC0] text-sm">Bonus</p>
                  <p className="font-bold text-lg">1,465</p>
                </div>
              </div>
              <CircleChart2 />
            </div>
          </div>
        </div>

        <div className="grid w-full gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.7fr_1.2fr] mt-4">
          <div className="rounded-3xl bg-gradient-to-l from-[#060B28BD] to-[#0A0E23B5] p-6 flex flex-col">
            <div className="space-y-1">
              <p className="font-bold text-lg font-['Plus_Jakarta_Display'] text-white">
                Sales overview
              </p>
              <div className="flex items-center gap-1 font-['Plus_Jakarta_Display']">
                <p className="text-sm font-bold text-[#01B574]">(+5) more</p>
                <p className="text-sm font-semibold text-[#A0AEC0]">in 2021</p>
              </div>
            </div>
            <div className="rounded-2xl">
              <SalesChart />
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-l from-[#060B28BD] to-[#0A0E23B5] flex flex-col py-6 gap-2 sm:p-auto justify-between">
            <div className="border-3xl pl-4 bg-gradient-to-r from-[#060C29] to-[#040C3080] rounded-2xl">
              <BarChart />
            </div>
            <div className="w-full px-4">
              <p className="font-bold text-lg font-['Plus_Jakarta_Display']">
                Active Users
              </p>
              <div className="flex items-center gap-1 font-['Plus_Jakarta_Display']">
                <p className="text-sm font-bold text-teal-500">(+23)</p>
                <p className="text-sm font-semibold text-[#A0AEC0]">
                  than last week
                </p>
              </div>
            </div>

            {/* Corrected Active Users Section */}
            <div className="grid grid-cols-4 sm:grid-cols-4 px-4 gap-4">
                <div className="w-[100px] h-[66px] space-y-1">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-[#0075FF] rounded-lg flex items-center justify-center">
                            <i className="fa-solid fa-file text-sm text-white"></i>
                        </div>
                        <p className="text-sm font-semibold text-[#A0AEC0]">Users</p>
                    </div>
                    <p className="text-lg font-bold">32,984</p>
                    <div
                        className="w-[86px] h-[3px] rounded-sm"
                        style={{
                            background: "linear-gradient(to right, var(--iconcolor) 60%, var(--lion2color) 40%)",
                        }}
                    ></div>
                </div>

                <div className="w-[100px] h-[66px] space-y-1">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-[#0075FF] rounded-lg flex items-center justify-center">
                            <i className="fa-solid fa-rocket text-sm text-white"></i>
                        </div>
                        <p className="text-sm font-semibold text-[#A0AEC0]">Clicks</p>
                    </div>
                    <p className="text-lg font-bold">2.42m</p>
                    <div
                        className="w-[86px] h-[3px] rounded-sm"
                        style={{
                            background: "linear-gradient(to right, var(--iconcolor) 80%, var(--lion2color) 20%)",
                        }}
                    ></div>
                </div>

                <div className="w-[100px] h-[66px] space-y-1">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-[#0075FF] rounded-lg flex items-center justify-center">
                            <i className="fa-solid fa-cart-shopping text-sm text-white"></i>
                        </div>
                        <p className="text-sm font-semibold text-[#A0AEC0]">Sales</p>
                    </div>
                    <p className="text-lg font-bold">2400$</p>
                    <div
                        className="w-[86px] h-[3px] rounded-sm"
                        style={{
                            background: "linear-gradient(to right, var(--iconcolor) 25%, var(--lion2color) 75%)",
                        }}
                    ></div>
                </div>

                <div className="w-[100px] h-[66px] space-y-1">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-[#0075FF] rounded-lg flex items-center justify-center">
                           <i className="fa-solid fa-file text-sm text-white"></i>
                        </div>
                        <p className="text-sm font-semibold text-[#A0AEC0]">Items</p>
                    </div>
                    <p className="text-lg font-bold">320</p>
                    <div
                        className="w-[86px] h-[3px] rounded-sm"
                        style={{
                            background: "linear-gradient(to right, var(--iconcolor) 85%, var(--lion2color) 15%)",
                        }}
                    ></div>
                </div>
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-[2fr_1fr] grid-cols-1 lg:grid-cols-2 gap-2 mt-2 w-full text-sm px-2">
          <Projects />
          <Orders />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Dashboard;