import React from 'react'
import { ModeToggle } from '../ModeToggle';
import { common } from '@/constants';

type Props = {
  sidebarOpen: boolean
  setSidebarOpen: (arg0: boolean) => void;
};

const Navbar = (props: Props) => {
  return (
    // <nav className="sm:ml-64 top-0 z-50 bg-gray-200 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <nav className="sm:ml-64 top-0 z-50 bg-gray-200 border-b dark:bg-gray-900 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button 
              onClick={() => props.setSidebarOpen(false)}
              data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" 
              aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>
            <div className="flex ml-2 md:mr-24 sm:hidden ">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="FlowBite Logo" /> */}
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{common.appName}</span>
            </div>
          </div>
          <div className="flex items-center">
              <div className="flex items-center ml-3">
                {/* <ThemeChanger />Profile */}
                <ModeToggle />
                &nbsp;
              </div>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar