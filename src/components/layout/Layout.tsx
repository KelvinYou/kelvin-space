"use client";
import React, { PropsWithChildren, useState } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = (props: PropsWithChildren) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div>
      <Navbar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={() => setSidebarOpen((prev) => !prev)}
      />
      
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="p-4 sm:ml-64 min-h-screen bg-gray-100 dark:bg-gray-800">
        {props.children}
      </div>
    </div>
  )
}

export default DashboardLayout