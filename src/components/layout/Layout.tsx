"use client";
import React, { FC, PropsWithChildren, useState } from 'react'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Locale } from '@/i18n.config'
interface DashboardLayoutProps {
  lang: Locale
  children: React.ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div>
      <Navbar 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={() => setSidebarOpen((prev) => !prev)}
      />
      
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} lang={props.lang} />
      
      <div className="sm:ml-64 min-h-[calc(100vh-70px)] bg-gray-100 dark:bg-gray-800">
        {props.children}


        <Footer />
      </div>

    </div>
  )
}

export default DashboardLayout