import React from 'react';
import Sidebar from './component/Sidebar';
import Dashboard from './component/Dashboard';
import './App.css'

function App() {
  return (
    <div className="bg-[url('../public/bg.png')] bg-cover md:bg-repeat bg-no-repeat sm:m-0 h-full min-h-screen w-full flex flex-col md:grid md:grid-cols-[240px_1fr]">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;